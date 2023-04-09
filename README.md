# GPT TDD

An experiment to use GPT on [Test-Driven-Development](https://en.wikipedia.org/wiki/Test-driven_development).

Write what you expect the code to do, GPT generate code to pass all your tests.

## How it works

0. In TDD, we write all the tests first, and modify the code to make it pass all tests.
1. In this repo, we do the same - write tests first, and "write" code to pass all tests. The main difference is **we** don't **write** the code, GPT does.
1. It runs the tests, and takes in the failure message and the current code, then modify the code. And repeat this process.
1. After a few iterations, GPT finishes the code that passes all tests.

## File structure

- `/src`
  - `/tests`: The tests to pass. You need to write these.
  - `/output/result.ts` (gitignore): The result code from GPT.
  - `/gpt`: The core of this repo. Contains code that does the process above.

## How to use it

0. Create a `.env` based on `.example.env`, and add your OpenAPI API key.
1. Open `/tests/index.test.ts`, and write any tests you want for your function.
1. Optionally, you can go to `/gpt/index.ts` to tweak the 2 parameters.
1. Run `npm start` (run `npm i` first if haven't). GPT will run the process described above.
1. After it's finished, your function will be in `/ouput/result.ts`. (Or failure message)

## More

If you want to be adventurous, or being lazy to write tests, check out my package [AI-function-js](https://www.npmjs.com/package/ai-function-js) - where you only need to describe what to do, it will just run for you, even without creating any code!
