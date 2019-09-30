import { browser, by, element, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { TextInput, Clickable } from "./components";

export class SummaryPage {
    private claimSummaryElement: ElementFinder;

    constructor() {
        this.claimSummaryElement = element(by.id("summarycontainer"));
    }

    async getSummaryText(): Promise<string> {
        const until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.claimSummaryElement), 10000, "Element taking too long to appear in the DOM");

        return await this.claimSummaryElement.getText();
    }

    async setComment(comment: string): Promise<any> {
        await new TextInput("comment").setText(comment);
    }

    async addComment(): Promise<void> {
        await new Clickable(by.id("addNote")).click();
    }
}