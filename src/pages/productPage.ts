import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import * as productname from "../helper/util/test-data/products.json";

setDefaultTimeout(60 * 15000);


export default class ProductPage {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
  }

  private productPageElement = {
    productSearchField: "//input[@placeholder='Search Product']",
    productSearchButton: 'button[id="submit_search"]',

  }

  async searchProduct() {
    await this.page
      .locator(this.productPageElement.productSearchField)
      .fill(productname.productName);
    await this.page.click(this.productPageElement.productSearchButton);
  }

  async addToCart(productName: string) {
    const productSelector = `text=${productName}`;
    await this.page.hover(productSelector);
    await this.page.click(`a.add-to-cart`);
  }
}

