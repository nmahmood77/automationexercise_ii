import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await page.getByRole("link", { name: " Cart" }).click();
  await page.getByRole("link", { name: " Products" }).click();
  await page.getByRole("link", { name: " Contact us" }).click();
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await page.getByPlaceholder("Name").click();
  await page.getByPlaceholder("Name").fill("TestUser");
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .fill("testuser@testuser123@com");
  await page.getByRole("button", { name: "Signup" }).click();
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .press("ArrowRight");
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .fill("testuser@testuser123");
  await page.getByRole("button", { name: "Signup" }).click();
  await page.getByLabel("Mr.").check();
  await page.getByLabel("Password *").click();
  await page.getByLabel("Password *").fill("123456");
  await page.locator("#days").selectOption("1");
  await page.locator("#months").selectOption("1");
  await page.locator("#years").selectOption("2021");
  await page.getByLabel("Sign up for our newsletter!").check();
  await page.getByLabel("Receive special offers from").check();
  await page.getByLabel("First name *").click();
  await page.getByLabel("First name *").fill("test");
  await page.getByLabel("Last name *").click();
  await page.getByLabel("Last name *").fill("user");
  await page.getByLabel("Company", { exact: true }).click();
  await page.getByLabel("Company", { exact: true }).fill("12333");
  await page.getByLabel("Address * (Street address, P.").click();
  await page.getByLabel("Address * (Street address, P.").fill("123455");
  await page.getByLabel("Address 2").click();
  await page.getByLabel("Address 2").fill("123434545");
  await page.getByLabel("Country *").selectOption("United States");
  await page.getByLabel("State *").click();
  await page.getByLabel("State *").fill("123456");
  await page.getByLabel("City *").click();
  await page.getByLabel("City *").fill("1234567");
  await page.locator("#zipcode").click();
  await page.locator("#zipcode").fill("123456");
  await page.getByLabel("Mobile Number *").click();
  await page.getByLabel("Mobile Number *").fill("123456");
  await page.getByRole("button", { name: "Create Account" }).click();
  await page.getByRole("link", { name: "Continue" }).click();
  await page.getByRole("link", { name: " Delete Account" }).click();
  await page.getByRole("link", { name: "Continue" }).click();
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .fill("test12234");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("form").filter({ hasText: "Login" }).click();
  await page.getByPlaceholder("Password").click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .fill("test12234@12345");
  await page.getByRole("button", { name: "Login" }).click();
});
