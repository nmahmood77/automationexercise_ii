import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
setDefaultTimeout(60 * 15000);


export default class HomePage {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
  }

  private homePageElements = {
    homeLink: "//a[contains(text(),'Home')]",
    productLink: "//a[contains(text(),'Product')]",
    cartLink: '[data-testid="signup-button"]',
    signupLoginLink: '[data-testid="logo"]',
    deleteAccountLink: "//a[contains(.,'Delete Account')]",
    testCasesLink: '[data-testid="home-page-title"]',
    apiTestingLink: '[data-testid="home-page-subtitle"]',
    videotutorialsLink: '[data-testid="home-page-description"]',
    contactUsLink: '[data-testid="home-page-image"]'
  }


  async verifyHomePage() {
    expect(this.page).toHaveTitle(/Automation Exercise/);
  }
  //Click sur la page login
  async clickSignUpLoginLink() {
    await this.page.click(this.homePageElements.signupLoginLink);
  }
  //Click sur Product
  async clickProductsLinks() {
    await this.page.click(this.homePageElements.productLink);
  }

  async clickDeleteAccountLinks() {
    await this.page.click(this.homePageElements.deleteAccountLink);
  }

  async clickContactUsLink() {
    await this.page.click(this.homePageElements.contactUsLink);
  }

  async clickCartLink() {
    await this.page.click(this.homePageElements.cartLink);
  }

}

