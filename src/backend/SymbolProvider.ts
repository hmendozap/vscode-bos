/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2019, Mike Lischke
 *
 * See LICENSE file for more info.
 */

"use strict";

import { BosFacade } from "./BosFacade";
import { TextDocument, CancellationToken, DocumentSymbolProvider, SymbolInformation, ProviderResult } from "vscode";



export class BosSymbolProvider implements DocumentSymbolProvider {
    constructor (private backend: BosFacade) {}

    provideDocumentSymbols(document: TextDocument, token: CancellationToken) : ProviderResult<SymbolInformation[]> {

        let symbols = this.backend.listSymbols(document.fileName);
        return symbols;
    }

}