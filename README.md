# urban-dict-cli
A CLI application to find the meaning of words/slangs from the urban dictionary.
### Installation
```bash
$ npm install -g urbanary-cli
```
### Usage
```bash
$ urbanary --help
Usage: urbanary <command> [options]

Options:
  -h, --help             display help for command

Commands:
  find [options] <word>  find meaning of a word or abbreviation or slang
  help [command]         display help for command
```
### Examples
```bash
$ urbanary find lol # find meaning of lol
$ urbanary find -e lol # find meaning of lol with an example sentence
$ urbanary find -e -c 5 lol # find meaning of lol with up to 5 definitions and example sentences
```
### Options
```bash
-e or --example # to get an example sentence
-c [amount] or --count [amount] # to get up to [amount] definitions and example sentences, max = 10
```

### To Do
- [] Add more options
- [] Colorize output
- [] Better formatting for output

### License
<!--MIT-->
```
