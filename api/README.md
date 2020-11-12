# Cloudbeds API Framework

# How to Setup the Framework
- 1. Communicate with Lucas Hartridge - Provide him an email so he can adds you to the project. It was a required to provide the solution in a Gitlab Private Repository
- 2. Clone the Repository from : https://gitlab.com/lhartridge/cloudbeds
- 3. Run npm install
- 4.1 If you are using vsCode, you can run the test from the Debug console
- 4.2 You can run the test using npm run-script smoke or test or wip (this one is for debug purposed)

On the following Readme I will proceed to explain a little bit about the framework and the libraries that are used

# Structure

- **businessLogic:** This folder will contain all the logic related with the business. 
 - **entities:** this folder will contain the entities that belongs to the business, So all the behaviour will be encapsulated there. We only have a model and a service, but we can define a query file, if access to Database is needed and a dao file to make the database call
  **- services:** this folder will contain all the services that are needed in the business logic, for example the request.service that will encapsulta all the logic to perform http request using the axios library
** - container.js:** This file will contain the injection dependency used in the business logic. For the injection dependency I have used a library named awilix: https://www.npmjs.com/package/awilix. This container.js file will contain all the neccesary requires for libraries or our own services, focus in one place, then to use them we going to need to pass them as parameter inside brackets on each services that will need to be used. There are 3 methods to use :
    - createContainer: Will create the container
	- asFunction: Will export the require as a function, this is very useful for our own services to export their methods 
	- asValue: Will export the require as a value, this is very useful for xternal libraries and config files
- **features:** this folder will contain all the test logic. Inside of it you will find the features files, the steps files, the hooks. Basically all the testing logic will be inside of this folder and it will use the exposed services in the businessLogic to run the test steps
**- config.js:** Config file that will be used in all the project for API Path, User configuration, etc
**- .env: **Env FIle that will contain all the environment variables. In this case, it will be only the url of the api, that can be easily updated with different path to test different stages. RIght now is configured to be used in qa, but it can be dev, pre prod, etc

# Test Cases and Test Plan

On the Goals of the Test, it was required the Test Cases and Test Plan. Basically what I developed on this framework is the e2e test cases. 

Maybe you will notice that the following scenarios are not covered :

- Currencies are retrieved with specific fields as Admin User
- Currencies are retrieved with specific fields as Standard User 
- Currencies are retrieved with expand fields as Admin User
- Currencies are retrieved with expand fields as Standard User

On this Demo I was trying to follow an E2E workflow. Covering important business scenarios and smoke test. Because I think that many of the scenarios that are covered here, can be covered as component / unit testing, and is not neccesary to repeat them in higher layers

I decided to cover the test that are defined in the features files, taking into considaration that those scenarios have been mentioned on the resume that I was provided. So I think that they can be important from a Product Owner perspective. Because on my case, the formula test can also be test as component / unit test. Other test that should be covered at component / unit test are the cases where the fields are invalid, obligatory, etc. Is not neccesary to cover all those things at the API level because it should be covered at unit level based on the Testing Pyramid principle proposed by Martin Fowler

For the Test Plan I decided to add the '@smoke' tag, to only a few test that can validate that all the connections between the deployed services are working correctly

You will noticed that each test is idempotent. This means that each test can be run independently from another, that is why in each test the currency is created, because is not a good practice to have dependency between the test

I have marked exchange test cases with '@skip' tag, associated with a 500 Internal Server Error. The following messages is displaying when exchange endpoint is called : ```Type error: Too few arguments to function Mell\Bundle\SimpleDtoBundle\Services\Dto\DtoManager::deserializeEntity(), 3 passed in /var/www/currency-exchange/src/AppBundle/Controller/ExchangeController.php on line 50 and exactly 4 expected (500 Internal Server Error)´´´
This error seems to be related when data is retrieved from database, is expecting 4 parameters and is only receiving 3, the DTO parser fail

## Bug Reported: 500 Internal Server Error is returned when Exchange is calculated

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

Steps to Reproduce:
1. Go to http://qa-test.cloudbeds.com/app_dev.php/api/v1/doc
2. Set an Admin API Key (tR6TI49mh4fbKAuSjm9L) or Standard User Key -> Press Save
3. Go to Exchange Endpoint 
4. Press Sandbox Button
5. Insert currencyFromId = 77
6. Insert currencyToId = 78
7. Insert amount = 10
8. Press Try It !


Actual Result: Note that a 500 Internal Server error is returned. The following messages is displaying when exchange endpoint is called : ```Type error: Too few arguments to function Mell\Bundle\SimpleDtoBundle\Services\Dto\DtoManager::deserializeEntity(), 3 passed in /var/www/currency-exchange/src/AppBundle/Controller/ExchangeController.php on line 50 and exactly 4 expected (500 Internal Server Error)´´´
This error seems to be related when data is retrieved from database, is expecting 4 parameters and is only receiving 3, the DTO parser fail

Expected Result: The exchange should be calculated based on the following formula request.amount * currencyFrom.value / currencyTo.value



# Things that I found and I would like to mention
- The Documentation did not specify the type of Authorization required. By default I was using Bearer + Token, but after debugging the request on the swagger documentation is only the token
- The API path ends with a ‘ / ‘ Example: http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/ . This is not a good practice from my perspective
- I would recommend to update the POST status code to 201 CREATED, instead of 200
- When all the currencies are retrieved, the json response is an object with a property name _collection that contains the array of currencies. It would be better to just return the array of collections
- The approach that I follow to use the User Token, can be done in different ways, on this case I decided to use is as part of the test, defined on Gherkin language. So the type of user that will run the test is defined, and must be pass in each method. This is the part that I don't like, I would prefer to set a sort of authentication service that can be set when the Gherkin statement is called, and is not neccesary to pass the user type in each method, you will just need to call the authenticationService.getToken() inside the request.service
- I would recommend to rename the exchange endpoint to exchanges endpoint as a REST recommendation to have plural nouns
- As I mentioned before, all the status code provided in the swagger doc, should be tested as unit / component test. The request can be mocked, and we can test at that level that the right status code is sent to the user
- I would recommend to add a more understandable response body when the api returns a non successful code. It is returning the complete HTML that is not adding values from a users perspective, so I would recommend to add a specific message to be more accurate with the error. RIght now, the swagger ui, stop working when an error is returned, for example a 403 or the 500 that is returned when exchange endpoint is used
- I don't like the else if approach that I implemented to catch those scenarios that are not a happy path. In this case is only an else if, but in the case that more scenarios needs to be added, I would update the code to use a factory. A similar implementation with the user.service.js to get the API token
- I would like to add an Eslint here, but the default Airbnb base includes some things that I don't like, for example the 'use strict' needs to be removed. I prefer to have it because is a good practice
- Next Time, provide an email, so the person who develops the test can share the code with that email

