## About the Project

Casino is a E2E testing for the website https://casinoscanada.com/.

## Getting Started

### Prerequisites

* nodejs - [Download](https://nodejs.org/en/download/).

* npm
```sh
npm install npm@latest -g
```
* yarn
```sh
npm install --global yarn
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JulioPazini/Casino.git
   ```
3. Install NPM packages
   ```sh
   yarn
   ```

## Usage

### Run the Tests
 - Via command line
```sh
yarn cy:run
```
 - Via application

```sh
yarn cypress open
```

## Test Plan

The test plan aproach was to open each website provided analising and understanding the functionality of them, making notes of the general concept of it. Once the concept was understood, I started by creating the scenarios categorizing them in UI Testing and Functional Testing.

I decided to write the scenarios using BDD utilizing Cucumber in the project, making the scenarios easy to read and comprehend for everyone involved in the project. That is the best way to document the scenarios in my opnion.

## Packages/Libraries

Below are the Packages/Libraries used in the project as well as a brief explanation on what is it used for:

- [cypress](https://www.cypress.io/): Framework for E2E test.
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor#readme): Adds support for using feature files when testing with Cypress and Cucumber.
- [@shelex/cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin#readme): Plugin for integrating allure reporter in Cypress with support of Allure API.
- [allure-commandline](https://github.com/allure-framework/allure-npm#readme): Tool to generate Allure report from test results.
- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events): Plugin that adds more useful commands to cypress.
- [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api): Adds a visual UI for the API tests in Cypress.

## Test Report

It was used Allure report to demonstrate the scenarios written and show all the executions. It was configured to run every day at 12PM and it populates the report automatically on https://juliopazini.github.io/Casino/.