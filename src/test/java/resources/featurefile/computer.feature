@virgingames
Feature: Home Page Test
  As user I want to navigate to Virgin games website


  Scenario: User Should Navigate To Virgin Game page Successfully
    Given I am on Home page
    When I click on Accept Cookies

  Scenario: User Should click To Login text Successfully
    Given I am on Home page
    When I click on Accept Cookies
    Then verify virgin game image successfully

