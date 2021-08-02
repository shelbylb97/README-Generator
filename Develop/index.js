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
          {
          type: 'input',
          name: 'learn',
          message: 'What did you learn from this project?',
          },
          {
          type: 'input',
          name: 'link1',
          message: 'Paste your github repo link here',
          },
          {
          type: 'input',
          name: 'link2',
          message: 'Paste your deployed site link here',
          },
          {
            type: 'input',
            name: 'screenshot',
            message: 'Paste the img link for the screenshot of your deployed site here',
            },
      
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function generateMarkdown(data) {
//    return `# ${data.title}
    
//     #### ${data.name}
//     #### ${data.git}

//     ${data.screenshot}

//     <p> ${data.bio}</p>
//     <p>${data.learn}</p>
    
//     <p>Links ${data.link1}
//      ${data.link2}</p>`
    

//  }

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
