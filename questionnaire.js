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
        type: "input",
        message: "Choose the license type. Default is selected to The Unlicense. (MIT License/ Apache License 2.0/ The Unlicense):",
        name: "license",
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
  

// Export to make these user input questionnaire available
module.exports = {
    questionnaire: questions
};