import * as fs from "fs/promises";
import Parser from "tree-sitter";
import language from "tree-sitter-unpseudo";

const parser = new Parser();
parser.setLanguage(language);
const [, , filename] = process.argv;
const sourceCode = await fs.readFile(filename, "utf8");
const tree = parser.parse(sourceCode);
console.log((tree.rootNode as any).algorithmNodes);
