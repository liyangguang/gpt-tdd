# GPT TDD

An experiment to use GPT on [Test-Driven-Development](https://en.wikipedia.org/wiki/Test-driven_development). The expected result is the code can complete itself given the tests.

## How it works

0. In TDD, we write all the tests first, and modify the code to make it pass all tests.
1. In this repo, we do the same - write tests first, and "write" code to pass all tests. The main difference is *we* don't *write* the code, GPT does.
1. We run the tests, and feed the error message to GPT, together with the current code, and let it modify the code. Then run again.
1. After a few iterations, GPT finishes the code to pass all tests.

## File structure

- `/src`
  - `/gpt`: The core of this repo. Contains code that does the process above.
  - `/tests`: The tests to pass.
  - `/output/result.ts` (gitignore): The result code from GPT.

## How to use it

1. Open `/tests/index.test.ts`, and write any tests you want for your function.
1. Optionally, you can go to `/gpt/index.ts` to tweak the 2 parameters.
1. Run `npm start` (run `npm i` first if haven't). GPT will run the process described above.
1. After it's finished, your function will be in `/ouput/result.ts`. (Or failure message)
