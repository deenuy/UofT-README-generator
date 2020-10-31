const fs = require('fs');
const inquirer = require('inquirer');
const questionnaire = require('./questionnaire');

// User input prompt questionnaire to generate README file
var questions = [
  {
      type: "input",
      message: "Hi! Let's build a README.md for your project! First, what is your github username?",
      name: "github"
  },
  {
      type: "input",
      message: "What is the name of the github repository of the project?",
      name: "repo_name",
  },
  {
      type: "input",
      message: "What is the name of the project?",
      name: "proj_name",
  },
  {
      type: "input",
      message: "Provide a description the application:",
      name: "desc",
  },
  {
      type: "input",
      message: "Include any installation details needed:",
      name: "installation",
  },
  {
      type: "input",
      message: "Include the url of the deployed application, if it applies:",
      name: "url",
  },
  {
      type: "input",
      message: "Describe how to use the application:",
      name: "usage",
  },
  {
      type: "checkbox",
      message: "Choose the license type:",
      name: "license",
      choices: ["License-MIT-green", "License-Apache%202.0-green"],
  },
  {
      type: "input",
      message: "Enter details on contribution guidelines:",
      name: "contributing",
  },
  {
      type: "input",
      message: "Enter testing instructions:",
      name: "tests",
  },
  {
      type: "input",
      message: "Enter citation or credits information:",
      name: "citation",
  },
  {
      type: "input",
      message: "Finally, enter your contact email address?",
      name: "email"
  }
];

// console.log(questionnaire);

inquirer
.prompt(questions)
.then(response => {
  const { github } = response;
  const { repo_name } = response;
  const { proj_name } = response;
  const { desc } = response;
  const { installation } = response;
  const { url } = response;
  const { usage } = response;
  const { license } = response;
  const badges = `https://img.shields.io/badge/${license}.svg)`;
  const { contributing } = response;
  const { tests } = response;
  const { citation } = response;
  const { email } = response;
  const ContentTitles = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];
  const toc = ContentTitles.map((title) => `* [${title}](#${title})`).join('\n');

  const result = [
    `# Title: \n\n${proj_name}\n\n`,
    `## Description: \n\n${desc}\n\n`,
    `## Website: \n\n${url}\n\n`,
    `## Table of Contents: \n\n${toc}\n\n`,
    `## Installation: \n\n${installation}\n\n`,
    `## Usage: \n\n${usage}\n\n`,
    `## License: \n\n![License]${badges}\n\n`,
    `## Contributing: \n\nContributions, issues and feature requests are welcome.If interested, please contribute to the project at https://github.com/${github}/${repo_name}\n\n`,
    `## Tests: \n\n${tests}\n\n`,
    `## Questions: \n\nIf any questions, reach out to me @ ${email}\n`,
  ].join('');

  fs.writeFileSync('./output/README.md', result, (error) => {
    if (error) {
      console.log(error)
    } else {
      console.log(error.message);
    }
    console.log('\n\nREADME.md is successfully generated!\n');
  });
})
.catch(error => {
  console.log(error.message);
  const [, filename, line, column ] = error.stack.match(/\/([\/\w-_\.]+\.js):(\d*):(\d*)/)
  console.log(filename, line, column)
});