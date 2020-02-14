# bs-testautomation-demo
A small framework for corporate site testing written in Node.js/TypeScript, using WebdriverIO and Cucumber.
The POC is short scenario, which is going to a corporate web, 
navigating to "About us" page and then downloading the pictures of key speakers at ${project.directory}/target/
path.

## Software Stack
This project uses Node.js, TypeScript, Cucumber-JS 5, WebdriverIO 5 and docker-compose

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

## Architecture


## Running Tests
This project uses [yarn](https://classic.yarnpkg.com/).
Run tests using the following command: 
```
$yarn test
```
## Cucumber Report
### Default console reporter
The default reporter is "dot". 
### Cucumber report
When the tests are executed, the default html Cucumber report can be found at:
${project.directory}/target/generated-report

## Docker
This project is packaged for Docker only.
If you need to run the project locally, please comment the following line in wdio.conf.js:
```
//hostname: 'selenium-hub',
```
and also please install 'selenium-standalone' using the command:
```
$yarn add selenium-standalone --dev
```
The project uses selenium hub and selenium grid solution to provide the tests execution in the isolated environments 
in docker container.
To run the tests in isolated environments, you can use provided docker-compose file 
and the following commands:
```
$docker-compose up
```
or
```
$docker-compose up --build
```

### Using a bash script to wait for the Grid
A common problem known in docker is that a running container does not always mean that the application inside 
it is ready. The following script is an example of how this can be done using bash.
```
./wait-for-grid.sh
```
