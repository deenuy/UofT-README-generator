const fs = require('fs');
const inquirer = require('inquirer');
const questionnaire = require('./questionnaire');

inquirer
  .prompt([
    questionnaire
  ])
  .then((response) => {
    // console.log(response);
    const { github } = response;
    const { repo_name } = response;
    const { proj_name } = response;
    const { desc } = response;
    const { installation } = response;
    const { url } = response;
    const { usage } = response;
    const { license } = response;
    const badges = License.map((badge) => `![NPM](https://img.shields.io/npm/l/${badge})`).join(' ');
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
      `## License: \n\n${badges}\n\n`,
      `## Contributing: \n\nContributions, issues and feature requests are welcome.If interested, please contribute to the project at https://github.com/${github}/\n\n`,
      `## Tests: \n\n${tests}\n\n`,
      `## Questions: \n\nIf any questions, reach out to me @ ${email}\n`,
    ].join('');

    fs.writeFileSync('README.md', result, (err) => {
      if (err) throw err;
      console.log('README.md is successfully generated!');
    });
  });