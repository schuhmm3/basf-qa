# UI

The UI Folder contains all the tests to cover the BASF Coding Challenge Test Engineer Front End Task. This framework is based on Cypress. I never used before cypress but I thought that it should be a good challenge for me to implement this solution using a framework that I did not use before to show my essence as an Engineer, I am always open to learning new tools.

## Prerequesites

1. Login https://qknows-qa.basf.com"
2. Enter your username and password
3. Enter the Google Authenticator Code
4. Right Click on your browser -> Go to Applications Tab -> Cookies -> Get the XSRF-TOKEN and AUTHSESSIONID
5. Go to cypress -> fixtures -> profile.json
6. Replace the value for XSRF-TOKEN
7. Replace the value for AUTHSESSIONID

To find this values you will need to
Note this is in case that the current credentials did not work. The reason why I had to to this is explained in `Problems that I found` section

## Steps to Run the Test:

1. Type `npm install` or `npm i` in Terminal - This will install all the dependencies
2. Execute the command on Step 1
3. Type `npm run open-cypress in Terminal`
4. Execute the command on Step 2
5. Note that a new window with Cypress Runner will be opened
6. Here you will see 2 spec files. One contains the test for login and another one for the search functionality
7. Clicking on each file will launch the test individually
8. To run all the test click on Run 2 integration specs

## Problems that I found

- It is not possible to automate the login process because the Google Authenticator Factor is required. This code is only given by the Authenticator App on the Phone. That is why I had to implement the Cookies solution, setting up the cookies manually before going to the site
- I found an issue with the Terms and Condition Sign. After checking, the ‘Agree with terms and condition’ and click the ‘Proceed to QKnows’ button a 400 Error is displayed in Network Console. Because of this each time that you refresh the page, the ‘QKnows Terms of Use’ is displayed


## Results
- Install cypress locally and all dependencies
- Changing from open to run

```
user@azure:~/challenges/test/LucasHartridge/ui$ npm run open-cypress

> basf-ui-test@0.0.1 open-cypress /home/user/challenges/test/LucasHartridge/ui
> cypress run


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    5.6.0                                                                              │
  │ Browser:    Electron 85 (headless)                                                             │
  │ Specs:      2 found (login.spec.js, search.spec.js)                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  login.spec.js                                                                   (1 of 2)


  Login Suite
    ✓ Log in Q4 Site (2124ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     login.spec.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /home/user/challenges/test/LucasHartridge/ui/cypress/vi    (0 seconds)
                          deos/login.spec.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  search.spec.js                                                                  (2 of 2)


  Search Suite
    ✓ the word: water should appear on top 3 results (2133ms)
    ✓ the word: propylen should appear on top 3 results (1729ms)


  2 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     search.spec.js                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /home/user/challenges/test/LucasHartridge/ui/cypress/vi    (0 seconds)
                          deos/search.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  login.spec.js                            00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  search.spec.js                           00:04        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:06        3        3        -        -        -

user@azure:~/challenges/test/LucasHartridge/ui$
```
