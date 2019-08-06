/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2019, Mike Lischke
 *
 * See LICENSE file for more info.
 */

"use strict";

import { CharStreams, CommonTokenStream, Token, RuleContext, ParserRuleContext } from "antlr4ts";

import { BosParser, FunctionStmtContext, SubStmtContext, AmbiguousIdentifierContext  } from "../parser/BosParser";

import { BosListener } from "../parser/BosListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { BosLexer } from "../parser/BosLexer";
import { SymbolInformation, SymbolKind, Range, Location, DocumentSymbol, Uri, DocumentSymbolProvider, TextDocument, CancellationToken, ProviderResult } from "vscode";


class BosExtensionListener implements BosListener {
    _source: string = "";
    public documentSymbols: SymbolInformation[] = [];

    constructor(source: string){
        this._source = source;
    }

    exitFunctionStmt(context: FunctionStmtContext) {
        this.addDocumentSymbol(context.ambiguousIdentifier());
    }

    enterSubStmt(context: SubStmtContext) {
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

export class SymbolResolver {
    public parseFile(documentUri: string, bosFile: string) : SymbolInformation[]
    {
         let input = CharStreams.fromString(bosFile);
        // let inputStream = new ANTLRInputStream(bosFile);
        let lexer = new BosLexer(input);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new BosParser(tokenStream);

        let tree = parser.startRule();

        const listener: BosListener = new BosExtensionListener(documentUri);
        // use the entry point for listeners
        ParseTreeWalker.DEFAULT.walk(listener, tree);

        return (<BosExtensionListener>listener).documentSymbols;
    }
}

export class BosSymbolProvider implements DocumentSymbolProvider {

    provideDocumentSymbols(document: TextDocument, token: CancellationToken) : ProviderResult<SymbolInformation[]> {
        let input = CharStreams.fromString(document.getText());
        // let inputStream = new ANTLRInputStream(bosFile);
        let lexer = new BosLexer(input);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new BosParser(tokenStream);

        let tree = parser.startRule();

        const listener: BosListener = new BosExtensionListener(document.fileName);
        // use the entry point for listeners
        ParseTreeWalker.DEFAULT.walk(listener, tree);

        return (<BosExtensionListener>listener).documentSymbols;
    }

}