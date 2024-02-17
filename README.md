# Playwright BDD Framework

Playwright doesn't offer Gherkin/BDD implementation as standard, so this template was designed as a lightweight 
solution to _organize_ your test files in a Gherkin-style approach.

## Spec Files
The approach here is to minimize the execution of logic in the spec files. 
Most logic is abstracted away to actions or utils, with assertions performed in the spec file for better readability. 
Each spec file imports the bdd/gherkin organizing functions from `utils/bdd`.

Some benefits of these organizing functions include:
- Increased readability of your code
- Annotations/Scenarios are available in the reports
- Abstracting logic away from spec files increases reusability

## Utils
Util functions perform specific tasks such as calling an API, generating data, or generating files. 
While no significant logic is implemented in the util classes here, additional logic can be added as needed.

## Actions
Actions are combinations of utils, such as making an API request and performing logic on the response, 
or bundling UI actions together, like logging in to a website.

## Fixtures
Instantiate your classes to be available in your tests.

## Hooks
Perform logic before a test runs.

## General Notes
I hope you find something useful from this repository. Feel free to suggest improvements or contribute via pull requests. Happy Automating!
