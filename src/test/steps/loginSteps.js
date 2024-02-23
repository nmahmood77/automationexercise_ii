import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homePage";
import LoginPage from "../../pages/loginPage";

let homePage = new HomePage();
let loginPage = new LoginPage();

Given('User navigate to the AutomationExercise page"', async function () {
  await fixture.page.goto(process.env.WEB_URL);
});

Then("Click on Signup Login button", async function () {
  await homePage.clickSignUpLoginLink();
});

Then("Enter correct email address and password", async function () {
  await loginPage.enterLoginDetails();
});

Then("Click login button", async function () {
  await loginPage.clickOnSubmitButton();
});

Then("Verify that Logged in as username is visible", async function () {
  await loginPage.verifyLogIn();
  await loginPage.verifyLoginSuccess();
});
