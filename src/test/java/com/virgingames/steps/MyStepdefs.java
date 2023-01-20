package com.virgingames.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MyStepdefs {



    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Accept Cookies$")
    public void iClickOnAcceptCookies() {
        new HomePage().clickAcceptCookies();
    }


    @Then("^verify virgin game image successfully$")
    public void verifyVirginGameImageSuccessfully() {
        new HomePage().getVirginGamesImage();
    }
}
