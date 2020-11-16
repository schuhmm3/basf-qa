# BASF API Framework

# How to Setup the Framework

- 1. Clone the Repository from : https://github.com/LucasHartridge/basf-qa
- 2. Open the cloned repository
- 3. Open the terminal and type cd api
- 4. Run npm install
- 5. Run npm run test - This command will execute all the test and will open a report or Run npm run smoke - This command will execute all the smoke test and open a report

# Structure

- **businessLogic:** This folder will contain all the logic related with the business.
- **entities:** this folder will contain the entities that belongs to the business, So all the behaviour will be encapsulated there. We only have a model and a service, but we can define a query file, if access to Database is needed and a dao file to make the database call
- **features:** this folder will contain all the test logic. Inside of it you will find the features files, the steps files, the hooks. Basically all the testing logic will be inside of this folder and it will use the exposed services in the businessLogic to run the test steps
- **config.js:** Config file that will be used in all the project for API Path, User configuration, etc
- **.env:** Env file that will contain all the environment variables. In this case, it will be only the url of the api, that can be easily updated with different path to test different stages. RIght now is configured to be used in qa, but it can be dev, pre prod, etc

I have used the following libraries:

- **awilix:**: Dependency Injection Library
- **lh-http-request:**: My own library that is published in github. It is a wrapper of Axios to perform htpp request
- **eslint-config-lukahartridge:**: My own library that is published in github with my own eslint configuration
- **cucumber:**: To create BDD Test and generate report

# Test Cases and Test Plan

For the test cases you will see that them are written in the person.feature file. I decide to use a Gherkin / BDD approach for this, because I had the experience of using it for API E2E Test and the experience was very succesful. The reason of this is because the feature files allows you to read them and easily understand how the application should behave. This allows the team and the product owner to talk in the 'same language', where the business cases is this common language to use. If you are a new starter in the team, having this Human Readable format will help the new resource to understand the application

On this Demo I was trying to follow an E2E workflow. Covering important business scenarios and smoke test. Because I think that many of the scenarios that are covered here, can be covered as unit testing (social and solitary), and is not neccesary to repeat them in higher layers

I decided to cover the test that are defined in the features files, taking into considaration that those scenarios have been mentioned on the resume that I was provided. So I think that they can be important from a Product Owner perspective. Because on my case, the formula test can also be test as component / unit test. Other test that should be covered at component / unit test are the cases where the fields are invalid, obligatory, etc. Is not neccesary to cover all those things at the API level because it should be covered at unit level based on the Testing Pyramid principle proposed by Martin Fowler

For the Test Plan I decided to add the '@smoke' tag, to only a few test that can validate that all the connections between the deployed services are working correctly

You will noticed that each test is idempotent. This means that each test can be run independently from another, that is why in each test did not depend on the previous because is not a good practice to have dependency between the test

# Things that I found and I would like to mention

- The provided REST endpoint is not created following the best REST standards. Below you can find a list to improve that REST endpoint
- Collections should be name with plural nouns so instead of being person should be persons
- API is not versioned. If the current one is the first version it should be api/v1
- Use nouns instead of verbs in endpoint paths, this makes reference to the get enpoint api/person/all for the GET Http Request. In order to make it REST is should be GET - v1/persons in order to get all the resources and GET - v1/persons/{id} to get only one resource
- The PUT endpoint is used is to create a person, but should be an endpoint to update an existing resource, the POST Http Method is used to create resources. Use PUT when you want to modify a singular resource which is already a part of resources collection. PUT replaces the resource in its entirety. Use PATCH if request updates part of the resource. Use POST when you want to add a child resource under resources collection.
- The document mentioned that it should be available to test CRU operations, but there is not a PATCH endpoint to update an existing resource
