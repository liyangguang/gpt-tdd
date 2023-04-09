import runIteration from './iteration';
import { initCode } from './file';
import chalk from 'chalk';

/* This is tied to the cost of the operation, choose it carefully.
 * In most cases, it either finishes in 1 or a few iterations, or won't be able to make it work,
 * so having a large value doesn't make the output better. */
const MAX_ITERATIONS = 2;

// Whether to log detailed process info.
const LOG_DEBUG_INFO = true;

(async function start() {
  initCode();

  let iterationCount = 0;
  let isSuccessful = false;

  while(iterationCount < MAX_ITERATIONS) {
    const allPassed = await runIteration(LOG_DEBUG_INFO);
    if (allPassed) {
      isSuccessful = true;
      console.info(chalk.green('[All finished!] Check the code in `/src/result/index.ts`. And run `npm test` to verify.'));
      break;
    }
    iterationCount ++;
  }
  if (!isSuccessful) {
    console.info(chalk.red('[Failed to pass all tests] Check the current code in `/src/result/index.ts`.'));
  }
})();
