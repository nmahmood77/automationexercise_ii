import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homePage";
import RegisterUser from "../../pages/signupPage";

let homePage = new HomePage();
let registerUser = new RegisterUser();

Given("User navigate to the AutomationExercise page", async function () {
  await fixture.page.goto(process.env.WEB_URL);
});

Then("Click on Signup_Login button", async function () {
  await homePage.clickSignUpLoginLink();
});

Then("Enter name and email address", async function () {
  await registerUser.enterUserDetails();
});

Then("Click Signup button", async function () {
  await registerUser.clickOnSignUpButton();
});

Then("Verify that ENTER ACCOUNT INFORMATION is visible", async function () {
  await registerUser.verifyAccountInformation();
});

Then(
  "Fill details: Title, Name, Email, Password, Date of birth, First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
  async function () {
    await registerUser.fillUserDetails();
  }
);

Then("Click Create Account button", async function () {
  await registerUser.clickOnCreateAccountButton();
});

Then("Click Continue button", async function () {
  await registerUser.clickOnContinueButton();
});
