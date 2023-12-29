const OpenAI = require('openai-api');

let openai;

const initialize = (apiKey) => {
    openai = new OpenAI(apiKey);
};

const getOpenAI = () => {
    if (!openai) {
        console.error('OpenAI has not been initialized. Please call initialize() first.');
        process.exit(1);
    }
    return openai;
};

module.exports = {
    initialize,
    getOpenAI
};
