import { browser, by, element, promise } from "protractor";
import { DashboardPage } from "./dashboard.po";

export class AppPage {
    private static _currentPage: any;

    static async navigateToBase(): promise.Promise<DashboardPage> {
        await  browser.get(browser.baseUrl);
        return new DashboardPage();
    }

    static getHeaderText(): promise.Promise<string> {
        return element(by.tagName("h1")).getText();
    }

    static currentPage<TPage>(expectedPageConstructor: {new (): TPage}): TPage {
    // Check we are on the expected page
    const expectedPageName = expectedPageConstructor.name;
    const actualPageName = AppPage._currentPage.constructor.name;
    chai.assert.equal(expectedPageName, actualPageName, "On the wrong page");

    return AppPage._currentPage as TPage;
    }

    static async getErrorText(elt: string): Promise<string> {
        const errorElt = await element(by.id(elt + "Error"));
        return errorElt.getText();
    }

}
