//- 🛠️ Initialize NPM Project
// npm init -y (This creates a package.json file.)

//- 📦 Install TypeScript & ts-node
//->A. 🌍 Global Installation (useful for CLI usage in any folder)
// npm install -g typescript ts-node
//->B. 📦 Local Installation (project-specific — best practice)
// npm install --save-dev typescript ts-node @types/node

//->🧾 Create a TypeScript Config File
// npx tsc --init

//- Create a TypeScript File

//- Run & Compile TypeScript
//> A. Run Without Compiling (ts-node)
// npx ts-node src/app.ts

//> or if installed globally:
// ts-node src/app.ts

//> B. Compile to JS (using tsc)
// npx tsc              Compiles all files from `src/` into `dist/`
// node dist/app.js     Run the compiled JS file

//> or manually:
// npx tsc src/app.ts   Outputs app.js in the same folder (if no `tsconfig`)
