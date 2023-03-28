import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";

config(); // Load .env file

function submitUserInput() {
  const userInput = document.getElementById("userInput").value;
  ai(userInput);
}

async function ai(userInput) {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
  }));

  const res = await openai.createCompletion({
    engine: 'gpt-3.5-turbo',
    prompt: userInput,
    maxTokens: 1024,
    n: 1,
    stop: '\n',
    temperature: 0.7
  })

  const response = res.choices[0].text.trim();
  getResponse(response);
}

function getResponse(response) {
  document.getElementById("response").innerHTML = response;
}