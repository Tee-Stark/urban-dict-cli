const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    RAPID_API_HOST: process.env.RAPID_API_HOST,
    API_BASE_URL: process.env.API_BASE_URL
}
