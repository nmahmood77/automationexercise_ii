import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homePage";
import ContactUsPage from "../../pages/contactUsPage";

let homePage = new HomePage();
let contactUsPage = new ContactUsPage();

Given("User navigate to the AutomationExercise page", async function () {
  await fixture.page.goto(process.env.WEB_URL);
});

When("The user clicks Contact us menu button", async function () {
  await homePage.clickContactUsLink();
});

When("The user enters name, email, subject and message", async function () {
  await contactUsPage.enterUserDetails();
});

When("The User clicks Submit button", async function () {
  await contactUsPage.clickSubmitButton();
});
