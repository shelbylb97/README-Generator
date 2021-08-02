// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');



// TODO: Create an array of questions for user input
const questions = [
    {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
          },
          {
            type: 'input',
            name: 'git',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'bio',
            message: 'What is the purpose of your project?',
          },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app (prompting)
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Creating READ.md')
        const returnedItem = generateMarkdown(data);

        writeToFile('/result/README.md', returnedItem)
       
    })
}

// Function call to initialize app
init();
