import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import * as loginCred from "../helper/util/test-data/login_creds.json";
import * as signupCred from "../helper/util/test-data/registration.json";
setDefaultTimeout(60 * 15000);


export default class ContactUsPage {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
  }

  private contactPageElements = {
    inputName: "//input[@data-qa='name']",
    inputEmail: "//input[@data-qa='email']",
    inputSubject: "//input[@data-qa='subject']",
    inputMessage: "//textarea[@data-qa='message']",
    inputFile: "//input[@type='file']",
    submitButton: "//input[@data-qa='submit-button']"
  }

  async fillOutDetails(name: string, email: string, subject: string, message: string, filepath: string) {
      await this.page.fill(this.contactPageElements.inputName, signupCred.name)
      await this.page.fill(this.contactPageElements.inputEmail, loginCred.email)
      await this.page.fill(this.contactPageElements.inputSubject, loginCred.subject)
      await this.page.fill(this.contactPageElements.inputMessage, loginCred.message)
      await this.page.setInputFiles(this.contactPageElements.inputFile, filepath)
}

async clickOnSubmitButton() {
    await this.page.click(this.contactPageElements.submitButton)
}
}


