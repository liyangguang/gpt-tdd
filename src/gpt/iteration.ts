import { ask } from './openai';
import { runTest } from './run_test';
import {readCode, writeCode} from './file';
import chalk from 'chalk';

export default async function(verboseLog = false): Promise<boolean> {
  console.info(chalk.yellow('[Running tests]'));
  const {failure, allPassed} = await runTest();
  if (allPassed) return true;;

  if (verboseLog) console.info(chalk.white(failure));
  console.info(chalk.yellow('[Test failed. Asking GPT]'));
  const currentCode = readCode();
  const response = await ask(failure!, currentCode);
  if (verboseLog) console.info(chalk.white(response));
  console.info(chalk.yellow('[Updating code]'));
  writeCode(response);
  return false;
}
