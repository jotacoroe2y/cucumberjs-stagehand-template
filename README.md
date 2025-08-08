# cucumberjs-stagehand-template
A template to start a Cucumber + Stagehand project.

## Installation
Install node packages:
```bash
npm install
```

## Environment variables
Create a `.env` file in the root path, then add the following environment variables:
```
GOOGLE_GENERATIVE_AI_API_KEY=AI_API_KEY_VALUE
GOOGLE_API_KEY=AI_API_KEY_VALUE
```

Note that this template uses the Gemini model. Both env variables will have the same value.

Different env variables will be needed if you're using a different model. [Here](https://docs.stagehand.dev/integrations/mcp/configuration#available-models) you can consult the different models available in Stagehand.
More info in [Stagehand docs](https://docs.stagehand.dev/) and the respective model providers docs/platforms:
- [Google Gemini](https://aistudio.google.com/apikey)
- [OpenAI](https://platform.openai.com/api-keys)
And so on.

## Running Tests
Run the feature files using the following command:
```bash
npm test
```
