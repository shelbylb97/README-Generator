// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  #### ${data.name}
    #### ${data.git}

    ${data.screenshot}

    <p> ${data.bio}</p>
    <p>${data.learn}</p>
    
    <p>Links ${data.link1}
     ${data.link2}</p>

`;
}

module.exports = generateMarkdown;
