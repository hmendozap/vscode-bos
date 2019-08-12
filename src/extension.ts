// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
import {window, commands, Disposable, ExtensionContext, StatusBarAlignment,
    StatusBarItem, TextDocument, languages, workspace, TextDocumentChangeEvent } from 'vscode';
import { ProgressIndicator } from './frontend/progress';
import { BosSymbolProvider } from './backend/SymbolProvider';
import { ContextSensitivityInfo } from 'antlr4ts/atn/ContextSensitivityInfo';
import { BosFacade } from './backend/BosFacade';

const BOS = { language: 'bos', scheme: 'file'};

let progress: ProgressIndicator;
let backend: BosFacade;
let symbolProvider: BosSymbolProvider;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    console.log('Congratulations, your extension "vscode-bos" is now active!');

    progress = new ProgressIndicator();
    backend = new BosFacade("");
    symbolProvider = new BosSymbolProvider(backend);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = commands.registerCommand('extension.helloWorld', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        window.showInformationMessage('Hello World!');
    });

    // context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider())

    context.subscriptions.push(languages.registerDocumentSymbolProvider(BOS,
        symbolProvider));
    // context.subscriptions.push();
    context.subscriptions.push(disposable);

    // Events 
    workspace.onDidChangeTextDocument((event: TextDocumentChangeEvent) => {
        if (event.contentChanges.length > 0 && event.document.languageId === 'bos' && event.document.uri.scheme === 'file') {
            let documentName = event.document.fileName;
            backend.setTextInBuffer(documentName, event.document.getText());
        }

    });
    workspace.onDidSaveTextDocument((document: TextDocument) => {
        if (document.languageId === 'bos' && document.uri.scheme === 'file') {
            console.log('Im starting animation');
            progress.startAnimation();
            setTimeout(()=> {
                progress.stopAnimation();
                console.log('Stop from animation');
            }, 5000);
            console.log('Im next from animation');
        }

    });
}

// this method is called when your extension is deactivated
export function deactivate() {}
