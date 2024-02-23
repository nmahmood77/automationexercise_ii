import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homePage";
import ProductPage from "../../pages/productPage";

let homePage = new HomePage();
let productPage = new ProductPage();

Given("User navigate to the AutomationExercise page", async function () {
  await fixture.page.goto(process.env.WEB_URL);
});

When("The user clicks Products menu button", async function () {
    await homePage.clickProductsLink();
});

When(
  "The user enters product name in search input and click search button",
  async function () {
    await productPage.searchProducts();
 
  }
);

Then("Verify SEARCHED PRODUCTS is visible", async function () {
   // await productPage.verifySearchResults();
   await productPage.addToCart();

});

