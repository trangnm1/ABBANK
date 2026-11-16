import { Page, expect } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async goto(url: string) {
        await this.page.goto(url);
    }

    async verifyUrl(url: string | RegExp, timeout = 5000) {
        await expect(this.page).toHaveURL(url, { timeout });
    }

    async waitForPageLoaded() {
        await this.page.waitForLoadState("domcontentloaded");
    }
}