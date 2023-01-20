package com.virgingames.pages;

import com.virgingames.utility.Utility;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='option_set']//child::div[2]")
    WebElement clickOnAccept;

    public void clickAcceptCookies() {
        log.info("Clicking on Accept Cookies : " + clickOnAccept.toString());
        clickOnElement(clickOnAccept);
    }

    @CacheLookup
    @FindBy(xpath = "//header/div[1]/a[1]/div[1]/picture[1]/img[1]")
    WebElement virginGames;

    public void getVirginGamesImage() {
        log.info("get Virgin Games Image :" + virginGames.toString());
        verifyThatElementIsDisplayed(virginGames);
    }

}
