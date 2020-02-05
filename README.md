# bs-testautomation-demo
A small framework for corporate site testing written in Node.js/TypeScript, using WebdriverIO and Cucumber.
The POC is short scenario, which is going to a corporate web, 
navigating to "About us" page and downloads the pictures of key speakers.

## Software Stack
This project uses Node.js, TypeScript, Cucumber-JS 5 and WebdriverIO 5.

## Web Driver Setup
This project uses selenium-standalone library for launching Selenium with WebDrivers support,
to interact with the Chrome web browser.

## IDE
This project was created in WebStorm, 
but it has been verified to work with Microsoft Visual Studio Code as well.

## TypeScript Code Formatting Rules
TypeScript code in this project is automatically formatted using  [Prettier](https://prettier.io/).
In order to accept the project default formatting, your IDE must be configured to use the formatting style.

## Analysing Tests
One can find the definition of features written in given-when-then Gherkin language at:
features/download-key-bolster-speakers-en_US.feature
In order to navigate from .feature files to steps definitions,
[Cucumber.js ](https://plugins.jetbrains.com/search?search=Cucumber) IDE plugin should be installed.

## Running Tests
This project uses [npm](https://nodejs.org/).
Run tests using the following command: "npm run test".

## Cucumber Report
### Default console reporter
The default reporter is "dot". 
### Cucumber report
When the tests are executed, the default html Cucumber report can be found at:
${project.directory}/target/generated-report