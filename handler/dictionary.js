const axios = require('axios');
const { RAPID_API_KEY, RAPID_API_HOST, API_BASE_URL } = require('../config/constants');

let requestOptions = {
    method: 'GET',
    url: API_BASE_URL,
    headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST
    }
}

const getDefinition = async (word) => {
    try {
        requestOptions.params = { term: word }
        const resp = await axios.request(requestOptions)
        console.log(`Definitions for ${word} fetched`)
        return resp.data.list
    } catch (err) {
        console.error(err)
    }
}

const displayDefinition = (wordData, options) => {
    if (options.example && options.count) {
        let count = 1;
        wordData.slice(0, options.count).forEach(element => {
            console.log(`Definition ${count++}: ${element.definition}`);
            console.log(`Example:\n${element.example}\n`);
        });
        return;
    } else if (options.count && !options.example) {
        let count = 1;
        wordData.slice(0, options.count).forEach(element => {
            console.log(`Definition ${count++}: ${element.definition}`);
        });
    } else if (options.example) {
        console.log(`Definition: ${wordData[0].definition}`);
        console.log(`Example:\n${wordData[0].example}`);
    } else {
        console.log(`Definition: ${wordData[0].definition}`);
    }
}

module.exports = {
    getDefinition,
    displayDefinition
}
