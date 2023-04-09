import { ask } from './openai';
import { runTest } from './run_test';
import {readCode, writeCode} from './file';

export default async function() {
  console.info('[Running tests]');
  const {failure, allPassed} = await runTest();
  if (allPassed) return;

  console.info('[Test failed. Asking GPT]');
  const currentCode = readCode();
  const response = await ask(failure!, currentCode);
  console.info('[Updating code]');
  writeCode(response);
}
