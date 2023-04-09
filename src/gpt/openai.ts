import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({apiKey: import.meta.env.VITE_OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

export async function ask(question: string) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      // {role: 'system', content: 'You are a typescript coding expert. You look at test failure message and the code, and knows how to fix it.'},
      {role: 'user', content: question},
    ],
    temperature: 0,
  });
  return completion.data.choices[0].message?.content;
}
