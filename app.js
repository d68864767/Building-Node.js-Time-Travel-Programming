// Import required modules
const dotenv = require('dotenv');
const openai = require('./openai');
const timeTravel = require('./timeTravel');

// Load environment variables
dotenv.config();

// Check if OPENAI_API_KEY is set
if (!process.env.OPENAI_API_KEY) {
    console.error('Please set your OPENAI_API_KEY in the .env file');
    process.exit(1);
}

// Initialize OpenAI with the API key
openai.initialize(process.env.OPENAI_API_KEY);

// Start the time travel programming
timeTravel.start();

console.log('Node.js Time Travel Programming has started. Enjoy your journey!');
