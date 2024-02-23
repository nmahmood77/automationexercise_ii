
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homePage";

let homePage = new HomePage();


Then("Click Delete Account button", async function () {

    await homePage.clickDeleteAccountLinks();
});

Then(
  "Verify that ACCOUNT DELETED! is visible and click Continue button",
  async function () {
    await expect(page.getByText("Account Deleted!")).toBeVisible()

  }
);
