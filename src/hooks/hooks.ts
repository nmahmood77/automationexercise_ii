import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test"
import { invokeBrowser } from "../helper/browsers/broswerManager";
import { getEnv } from "../helper/env/env";
import { fixture } from "./pageFixtures"


let browser: Browser;
let context: BrowserContext;


BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();

});
Before(async function () {
    context = await browser.newContext();
    fixture.page = await context.newPage();
});

After(async function ({ pickle, result }) {

    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");
    }
    await fixture.page.close();
    await context.close();
});


AfterAll(async function () {
    await browser.close();
});

