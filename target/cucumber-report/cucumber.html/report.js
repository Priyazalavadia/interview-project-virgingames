$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Test",
  "description": "As user I want to navigate to Virgin games website",
  "id": "home-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@virgingames"
    }
  ]
});
formatter.before({
  "duration": 6331030800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User Should Navigate To Virgin Game page Successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-virgin-game-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 138018800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 127223700,
  "status": "passed"
});
formatter.after({
  "duration": 757781900,
  "status": "passed"
});
formatter.before({
  "duration": 3096308300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Should click To Login text Successfully",
  "description": "",
  "id": "home-page-test;user-should-click-to-login-text-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify virgin game image successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 96822000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.verifyVirginGameImageSuccessfully()"
});
formatter.result({
  "duration": 66200800,
  "status": "passed"
});
formatter.after({
  "duration": 737816000,
  "status": "passed"
});
});