import fs from 'fs';
import path from 'path';

const TARGET_FILE = path.join(__dirname, '..', 'result', 'index.ts');

export function readCode(): string {
  return fs.readFileSync(TARGET_FILE, 'utf8');
}

export function writeCode(content: string): void {
  fs.writeFileSync(TARGET_FILE, content, 'utf8');
}
