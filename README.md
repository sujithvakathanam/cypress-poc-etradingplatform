# cypress-poc-etradingplatform
* This project is my attempt to learn the cypress tools and its functionalities inorder to automate the testing of etoro trading platform
* In each of the spec files(tests), tried to cover the cypress tricks and tips
* Page object pattern is used in this test framework
* Also added API tests and Cucumber BDD tests to prove the integration of Cucumber with Cypress
* Implemented Docker functionality to run cypress tests in Docker containers
* Integrated Percy in the framework to perform Visual regression testing

# How to run the tests?
* `npm install`

* `cypress open`
This command will open up the test window , through which you can run individual tests

* `cypress run`
This command will run all the tests in spec file

* If you like to run a specfic spec file, use the command as below
* `cypress run  --spec="cypress/integration/currencies.spec.js" `



