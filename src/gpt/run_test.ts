import { exec } from 'child_process';

const command = 'npm test';

export function runTest(): Promise<{allPassed: boolean, failure?: string}> {
  return new Promise((resolve) => {
    exec(command, (error, stdout) => {
      if (error) {
        resolve({allPassed: false, failure: error.message});
        return;
      }
    
      if (stdout) {
        resolve({allPassed: true});
      }
    });    
  });
}
