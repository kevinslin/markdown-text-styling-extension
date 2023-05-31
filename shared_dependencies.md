the app is: a vscode extension that lets the user bold, italicise and strikethrough the selected markdown text. it should have three commands: "bold selection", "italicise selection", and "strikethrough selection"

the files we have decided to generate are: tsconfig.json, .gitignore, README.md, src/test/runTest.ts, package.json, .vscode/launch.json

Shared dependencies:

1. mocha (for testing)

Exported variables:

1. None

Data schemas:

1. None

Function signatures:

1. boldSelection(text: string): string
2. italiciseSelection(text: string): string
3. strikethroughSelection(text: string): string