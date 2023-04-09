import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({apiKey: import.meta.env.VITE_OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

export async function ask(failureMessage: string, currentCode: string): Promise<string> {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {role: 'system', content: `You are a typescript coding expert.
          You look at test failure message and the code, and knows how to fix it.
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
