# Self-running GPT TDD

An experiment to use GPT on [Test-Driven-Development](https://en.wikipedia.org/wiki/Test-driven_development). The expected result is the code can complete itself given the tests.

## How it (hopefully) works

0. In TDD, we write all the tests first, and modify the code to make it pass all tests.
1. In this repo, we do the same - write tests first, and "write" code to pass all tests. The main difference is *we* don't *write* the code, GPT does.
1. We run the tests, and feed the error message to GPT, together with the current code, and let it modify the code. Then run again.
1. Hopefully after some rounds, GPT finishes the code to pass all tests.

## File structure

- `/src`
  - `/gpt`: The core of this repo. Contains code that does the auto TDD.
  - `/tests`: The tests to pass.
  - `/result`: The result code from GPT. It starts with an empty file.
