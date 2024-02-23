import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import * as signupCred from "../helper/util/test-data/registration.json";

setDefaultTimeout(60 * 15000);


export default class SignUpPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private signupElements = {
    signupName: "//input[@data-qa='signup-name']",
    signupEmail: "//input[@data-qa='signup-email']",
    signupButton: "//button[@data-qa='signup-button']",
    continueButton: "//a[contains(text(),'Continue')]",
    genderTitle: "(//input[@name='title'])[1]",
    signupPassword: "//input[@data-qa='password']",
    dobDay: "//input[@data-qa='dob-day']",
    dobMonth: "//input[@data-qa='dob-month']",
    dobYear: "//input[@data-qa='dob-year']",
    companyName: "//input[@data-qa='company']",
    address1: "//input[@data-qa='address']",
    address2: "//input[@data-qa='address-2']",
    country: "//select[@data-qa='country']",
    state: "//select[@data-qa='state']",
    city: "//input[@data-qa='city']",
    zipCode: "//input[@data-qa='zip-code']",
    mobileNumber: "//input[@data-qa='mobile-number']",
    createAccountButton: "//button[@data-qa='create-account']",
   
  };



  async enterSignUpDetails(name: string, email: string) {
    await this.page.fill(this.signupElements.signupName, name);
    await this.page.fill(this.signupElements.signupEmail, email);
    await this.page.click(this.signupElements.signupButton);
  }

  async verifyAccountInformation() {
    const textElement2 = await this.page.locator('text=ENTER ACCOUNT INFORMATION');
    const isTextVisible2 = await textElement2.isVisible();
    expect(isTextVisible2).
    toBe(true); 
  }

 async enterAccountDetail() {
   await this.page.locator(this.signupElements.genderTitle).check();
    await this.page.fill(this.signupElements.signupPassword, signupCred.password);
    await this.page.fill(this.signupElements.dobDay, signupCred.dob.day);
    await this.page.fill(this.signupElements.dobMonth, signupCred.dob.month);
    await this.page.fill(this.signupElements.dobYear, signupCred.dob.year);
    await this.page.fill(this.signupElements.companyName, signupCred.company);
    await this.page.fill(this.signupElements.address1, signupCred.address);
    await this.page.fill(this.signupElements.address2, signupCred.address2);
    await this.page.selectOption(this.signupElements.country, signupCred.country);
    await this.page.selectOption(this.signupElements.state, signupCred.state);
    await this.page.fill(this.signupElements.city, signupCred.city);
    await this.page.fill(this.signupElements.zipCode, signupCred.zipcode);
    await this.page.fill(this.signupElements.mobileNumber, signupCred.mobileNumber);
    await this.page.click(this.signupElements.createAccountButton);
 }

 async clickOnContinueButton() {
    await this.page.click(this.signupElements.continueButton);
 }

}
