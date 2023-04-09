import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({apiKey: import.meta.env.VITE_OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

export async function ask(failureMessage: string, currentCode: string): Promise<string> {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {role: 'system', content: `You are a typescript coding expert.
          You look at test failure message and the code, and knows how to fix it.
          You don't have access to the test code, you can only see the test result and the current code.
          You never talk to me, or chat with me. You only reply with code needed for the file.`},
      {role: 'user', content: `Here are the test failure message:

${failureMessage}

And here are the current code:

${currentCode}
      `},
      {role: 'user', content: `What is the updated code to pass all tests?
        Reply with only the code, no preamble, no chatting. Only modify the arguments and function body, don't touch the function name.`},
    ],
    temperature: 0,
  });
  return completion.data.choices[0].message?.content || '';
}

export async function checkResponse(content: string): Promise<string> {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {role: 'system', content: `You are a classifier expert to determine whether a piece of text looks more like javascript/typescript code, or more like a conversation.
        You only reply with one word - "code" or "conversation". And never say anything else.
      `},
      {role: 'user', content: `Sorry, I don't know how to anser this`},
      {role: 'assistant', content: `conversation`},
      {role: 'user', content: `Hi, how can I help you`},
      {role: 'assistant', content: `conversation`},
      {role: 'user', content: `function foo() {}`},
      {role: 'assistant', content: `code`},
      {role: 'user', content: `export function bar() {return 1+2+3}`},
      {role: 'assistant', content: `code`},
      {role: 'user', content},
    ],
    temperature: 0,
  });
  return completion.data.choices[0].message?.content || '';
}
