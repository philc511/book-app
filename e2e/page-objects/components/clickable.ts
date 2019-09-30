import { $, browser, element, Locator, WebElement } from "protractor";

/**
 * Represents a button or link that triggers an action.
 */
export class Clickable {

    private readonly ele: WebElement;

    constructor(locator: Locator) {
        this.ele = element(locator);
    }

    async click(): Promise<void> {
        await this.ele.click();
        // wait for the spinner to disappear...
        browser.wait(() => $("busy-indicator").isPresent().then( result => !result ), 20 * 1000);
    }

    async isEnabled(): Promise<boolean> {
        return this.ele.isEnabled();
    }

}