import fs from 'fs';
import path from 'path';

const DIR_PATH = path.join(__dirname, '..', 'output');
const FILE_PATH = path.join(DIR_PATH, 'result.ts');

export function initCode(): void {
  if (!fs.existsSync(DIR_PATH)) {
    fs.mkdirSync(DIR_PATH);
  }

  writeCode(`
export function myFunction() {
  
}
  `);
}

export function readCode(): string {
  return fs.readFileSync(FILE_PATH, 'utf8');
}

export function writeCode(content: string): void {
  fs.writeFileSync(FILE_PATH, content, 'utf8');
}
