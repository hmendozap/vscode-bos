"use strict";
/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2019, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { CharStreams, CommonTokenStream, Token, RuleContext, ParserRuleContext } from "antlr4ts";

import { BosParser, FunctionStmtContext, SubStmtContext, AmbiguousIdentifierContext  } from "../parser/BosParser";

import { BufferController } from "./BufferController";

import { BosListener } from "../parser/BosListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { BosLexer } from "../parser/BosLexer";
import { SymbolInformation, SymbolKind, Range, Location, DocumentSymbol, Uri, DocumentSymbolProvider, TextDocument, CancellationToken, ProviderResult, TaskScope } from "vscode";
import { readFileSync } from "fs";

class BosExtensionListener implements BosListener {
    _source: string = "";
    public documentSymbols: SymbolInformation[] = [];

    constructor(source: string){
        this._source = source;
    }

    exitFunctionStmt(context: FunctionStmtContext) {
        console.log(`Function ${context.ambiguousIdentifier().text}`);
        this.addDocumentSymbol(context.ambiguousIdentifier());
    }

    enterSubStmt(context: SubStmtContext) {
        console.log(`Sub ${context.ambiguousIdentifier().text}`);
        this.addDocumentSymbol(context.ambiguousIdentifier());
    }

    addDocumentSymbol(context: AmbiguousIdentifierContext) {
        let name = context.text;
        let range = new Range(context.start.line - 1, context.start.charPositionInLine, context.stop!.line - 1, context.stop!.charPositionInLine);

        let location = new Location(Uri.file(this._source), range);
        let info = new SymbolInformation(name, SymbolKind.Function, "", location);
        this.documentSymbols.push(info);
    }
}

// One source context per file. Source contexts can reference each other (e.g. for symbol lookups).

export class SymbolResolver {
    public symbolTable : SymbolInformation[] = [];
    private _source: string;
    private _tokenStream!: CommonTokenStream;

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
        // let tokenStream = new CommonTokenStream(lexer);
        this._tokenStream = new CommonTokenStream(lexer);
    }

    public parseFile(documentUri: string)
    {
        let parser = new BosParser(this._tokenStream);
        // TODO: Remember to add custom error listener.
        let tree = parser.startRule();

        const listener: BosExtensionListener = new BosExtensionListener(documentUri);
        // use the entry point for listeners
        ParseTreeWalker.DEFAULT.walk(listener as BosListener, tree);

        this.symbolTable = listener.documentSymbols;
    }
}

export class BosFacade {
    // Mapping file names to buffer Mgr instances.
    // TODO: Change this dict to an interface/class
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