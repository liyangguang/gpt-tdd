import chalk from 'chalk';

import { initCode } from './file';
import { ask, checkResponse } from './openai';
import { runTest } from './run_test';
import { readCode, writeCode } from './file';

async function runIteration(verboseLog = false): Promise<boolean> {
  console.info(chalk.yellow('[Running tests]'));
  const {failure, allPassed} = await runTest();
  if (allPassed) return true;;

  if (verboseLog) console.info(chalk.white(failure));
  console.info(chalk.yellow('[Test failed. Asking GPT]'));
  const currentCode = readCode();
  const response = await ask(failure!, currentCode);
  const responseType = await checkResponse(response);
  if (responseType.toLowerCase().trim() !== 'code') {
    console.info(chalk.yellow(`[Failed to fix] ${response}`));
    return false;
  }
  if (verboseLog) console.info(chalk.white(response));
  console.info(chalk.yellow('[Updating code]'));
  writeCode(response);
  return false;
}


export default async function (MAX_ITERATIONS: number, verboseLog = false) {
  initCode();

  let iterationCount = 0;
  let isSuccessful = false;

  while(iterationCount < MAX_ITERATIONS) {
    const allPassed = await runIteration(verboseLog);
    if (allPassed) {
      isSuccessful = true;
      console.info(chalk.green('[All finished!] Check the code in `/src/output/result.ts`.'));
      break;
    }
    iterationCount ++;
  }
  if (!isSuccessful) {
    console.info(chalk.red('[Failed to pass all tests after max iterations] Check the current result in `/src/output/result.ts`.'));
  }
}
