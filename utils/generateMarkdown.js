// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}
  ![License Badge](https://img.shields.io/badge/license-${data.license}-red) 
  ## Description
  ${data.description}
  ## Table of Contents:
  *[Repo](#repo) 
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Test](#test)
  *[License](#license)
  *[Username](#username)
  *[Email](#email)
  ## Repo
  ${data.repo}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![screenshot of my README.md code](assets\Screenshot (405).png)
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${data.license}
  ## Username
  ${data.username}
  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
