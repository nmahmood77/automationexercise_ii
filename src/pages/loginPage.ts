import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import * as loginCred from "../helper/util/test-data/login_creds.json";
setDefaultTimeout(60 * 15000);



export default class LoginPage {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
  }

  private loginPageElements = {
    logininEmail: "//input[@data-qa='login-email']",
    loginPassword: "//input[@placeholder='Password']",
    loginButton: "//button[@data-qa='login-button']",
    errorMessage: "//input[@data-qa='login-password']/following-sibling::p[1]"
}


async enterLoginDetails() {
    await this.page.fill(this.loginPageElements.logininEmail, loginCred.email);
    await this.page.fill(this.loginPageElements.loginPassword, loginCred.password);
  }

  async clickOnSubmitButton() {
    await this.page.click(this.loginPageElements.loginButton);
  }

  async verifyLogIn() {
    const textElement = await this.page.locator("text=Login to your account");
    const isTextVisible = await textElement.isVisible();
    expect(isTextVisible).toBe(true);
  }

  async verifyLoginFailure() {
    const textElement = await this.page.locator(
      "text=Your email or password is"
    );
    const isTextVisible = await textElement.isVisible();
    expect(isTextVisible).toBe(true);
  }

  async verifyLoginSuccess(username: string) {
    const loggedInText = await this.page.textContent(
      `text=Logged in as ${username}`
    );
    expect(loggedInText).toContain(`Logged in as ${username}`);
  }
}


