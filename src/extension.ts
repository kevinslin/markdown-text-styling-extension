import * as vscode from 'vscode';
import { boldSelection } from './commands/boldSelection';
import { italiciseSelection } from './commands/italiciseSelection';
import { strikethroughSelection } from './commands/strikethroughSelection';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.boldSelection', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.selection;
                const text = editor.document.getText(selection);
                const newText = boldSelection(text);
                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, newText);
                });
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.italiciseSelection', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.selection;
                const text = editor.document.getText(selection);
                const newText = italiciseSelection(text);
                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, newText);
                });
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.strikethroughSelection', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.selection;
                const text = editor.document.getText(selection);
                const newText = strikethroughSelection(text);
                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, newText);
                });
            }
        })
    );
}

export function deactivate() {}