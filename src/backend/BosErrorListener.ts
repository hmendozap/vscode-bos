"use strict";

import { ANTLRErrorListener, Recognizer, RecognitionException, Token, CommonToken } from 'antlr4ts';
import { DiagnosticTag } from 'vscode';
import { Override } from 'antlr4ts/Decorators';
import { DiagnosticEntry, DiagnosticType } from './BosFacade';

export class BosLexerErrorListener implements ANTLRErrorListener<number> {
    constructor (private errorList: DiagnosticEntry[]) {}

    @Override
    syntaxError<T extends number>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPosInLine: number, msg: string, ex: RecognitionException | undefined): void {
        let error : DiagnosticEntry  = {
            type: DiagnosticType.Error,
            message: msg,
            range: {
                start : { column: charPosInLine, row: line},
                end : { column:charPosInLine + 1, row: line}
            }
        };
        this.errorList.push(error);
    }
}

export class BosErrorListener implements ANTLRErrorListener<CommonToken> {
    constructor(private errorList: DiagnosticEntry[]) {}

    @Override
    syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPosInLine: number, msg: string, ex: RecognitionException | undefined): void {
        let error : DiagnosticEntry  = {
            type: DiagnosticType.Error,
            message: msg,
            range: {
                start : { column: charPosInLine, row: line},
                end : { column:charPosInLine + 1, row: line}
            }
        };

        if (offendingSymbol) {
            error.range.end.column = charPosInLine + offendingSymbol.stopIndex - offendingSymbol.startIndex + 1;
        }
        this.errorList.push(error);
    }

}