const questionnaire = require('./questionnaire.js')
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util')

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

// Append file
// fs.appendFile('append.txt', process.argv[2], function(error){
//     if(error) throw error;
//     console.log('APPEND: The data is successfully appended to existing file. \n');
// });

// getUserInput async function with promise chaining
console.log(questionnaire)