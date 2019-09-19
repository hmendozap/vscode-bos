"use strict";
/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2019, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { CharStreams, CommonTokenStream, Token, RuleContext, ParserRuleContext, DefaultErrorStrategy } from "antlr4ts";

import { BosParser, FunctionStmtContext, SubStmtContext, AmbiguousIdentifierContext, ClassStmtContext, VariableStmtContext, VariableSubStmtContext  } from "../parser/BosParser";

import { BufferController } from "./BufferController";

import { BosListener } from "../parser/BosListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { BosLexer } from "../parser/BosLexer";
import { SymbolInformation, SymbolKind, Range, Location, DocumentSymbol, Uri, DocumentSymbolProvider, TextDocument, CancellationToken, ProviderResult, TaskScope } from "vscode";
import { readFileSync } from "fs";
import { BosErrorListener, BosLexerErrorListener } from "./BosErrorListener";

/**
 * A range within a text. Just like the range object in vscode the end position is not included in the range.
 * Hence when start and end position are equal the range is empty.
 */
export class LexicalRange {
    start!: { column: number, row: number };
    end!: { column: number, row: number };
}

export enum DiagnosticType {
    Hint,
    Info,
    Warning,
    Error
}

export class DiagnosticEntry {
    type!: DiagnosticType;
    message!: string;
    range!: LexicalRange;
}


class BosExtensionListener implements BosListener {
    _source: string = "";
    public documentSymbols: SymbolInformation[] = [];

    constructor(source: string) {
        this._source = source;
    }

    enterClassStmt(context: ClassStmtContext) {
        let name = context.ambiguousIdentifier().text;
        this.addDocumentSymbol(name, context.start, context.stop!, SymbolKind.Class);
    }

    exitFunctionStmt(context: FunctionStmtContext) {
        // console.log(`Function ${context.ambiguousIdentifier().text}`);
        let name = context.ambiguousIdentifier().text;
        this.addDocumentSymbol(name, context.start, context.stop!, SymbolKind.Function);
    }

    enterSubStmt(context: SubStmtContext) {
        // console.log(`Sub ${context.ambiguousIdentifier().text}`);
        let name = context.ambiguousIdentifier().text;
        this.addDocumentSymbol(name, context.start, context.stop!, SymbolKind.Function);
    }

    enterVariableSubStmt(context: VariableSubStmtContext) {
        let name = context.ambiguousIdentifier().text;
        this.addDocumentSymbol(name, context.start, context.stop!, SymbolKind.Variable);
    }

    private addDocumentSymbol(name : string, startToken : Token, stopToken: Token, kind: SymbolKind, description?: string) {
        let range = new Range(startToken.line - 1, startToken.charPositionInLine, stopToken.line - 1, stopToken.charPositionInLine);

        let location = new Location(Uri.file(this._source), range);
        let info = new SymbolInformation(name, kind, description!, location);
        this.documentSymbols.push(info);
    }
}

// One source context per file. Source contexts can reference each other (e.g. for symbol lookups).

export class SymbolResolver {
    public symbolTable : SymbolInformation[] = [];
    public diagnostics: DiagnosticEntry[] = [];
    private _source: string;
    private _tokenStream!: CommonTokenStream;
    private _lexerErrorListener: BosLexerErrorListener = new BosLexerErrorListener(this.diagnostics);
    private _parserErrorListener: BosErrorListener = new BosErrorListener(this.diagnostics);

    /**
     *
     */
    constructor(source: string) {
        this._source = source;
    }

    public setStream()
    {
         let input = CharStreams.fromString(this._source);
        // let inputStream = new ANTLRInputStream(bosFile);
        let lexer = new BosLexer(input);
        lexer.removeErrorListeners();
        lexer.addErrorListener(this._lexerErrorListener);
        this._tokenStream = new CommonTokenStream(lexer);
    }

    public parseFile(documentUri: string)
    {
        let parser = new BosParser(this._tokenStream);
        parser.removeErrorListeners();
        // TODO: Remember to add custom error listener.
        parser.addErrorListener(this._parserErrorListener);
        parser.errorHandler = new DefaultErrorStrategy();

        let tree = parser.startRule();

        const listener: BosExtensionListener = new BosExtensionListener(documentUri);
        // use the entry point for listeners
        ParseTreeWalker.DEFAULT.walk(listener as BosListener, tree);

        this.symbolTable = listener.documentSymbols;
    }
}

export class BosFacade {
    // Mapping file names to buffer Mgr instances.
    private bufferMgr: BufferController = new BufferController();
    // private resolver: SymbolResolver;

    constructor(private importDir: string) 
    {
        console.log(`import dir ${importDir}`);
    }

    public getSelfDiagnostics() {
        throw new Error('Not implemented');
    }

    public getBuffer(documentUri: string) : string | undefined { 
        return this.bufferMgr.getBuffer(documentUri);
    }

    public setTextInBuffer(documentUri: string, text: string) { 
        this.bufferMgr.updateBuffer(documentUri, text);
    }

    /**
     * listSymbols
     * TODO: Make this async
     */
    public listSymbols(documentName : string) : SymbolInformation[] | null {
        let source = this.getBuffer(documentName);
        if (!source) {
            source = readFileSync(documentName, 'utf8');
            this.setTextInBuffer(documentName, source );
        }
        let resolver = new SymbolResolver(source!);
        resolver.setStream();
        resolver.parseFile(documentName);
        return resolver.symbolTable;
    }

    public getLocalFunctions() : SymbolInformation | null {
        return null;
    }

}