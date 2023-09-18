#!/usr/bin/env node

const { program } = require('commander');
const { displayDefinition, getDefinition } = require('../handler/dictionary.js');

program
    .usage('<command> [options]')
    .command('find <word>')
    .description('find meaning of a word or abbreviation or slang')
    // .argument('<word>', 'word, abbreviation or slang to find')
    .option('-e, --example', "Display examples")
    .option('-c, --count [amount]', 'amount of definitions to display (max is 10)')
    .action(async (word, options) => {
        console.log(`Looking up definitions for ${word}\n`);
        let wordData = await getDefinition(word);
        displayDefinition(wordData, options);
    });

program.parse();
