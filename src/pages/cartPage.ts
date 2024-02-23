
import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
setDefaultTimeout(60 * 15000);


export default class CartPage {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
  }

  private cartPageElements = {
    continueShopping: "//button[text()='Continue Shopping']",
  
  }
  public async continueShopping() {
    await this.page.click(this.cartPageElements.continueShopping);
  }

  async verifyCartContainsText(productName: string, expectedText: string) {
    const cartItemText = await this.page.textContent(`text=${productName}`);
    expect(cartItemText).toContain(expectedText);
  }
  

}

