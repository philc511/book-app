import { After, setDefaultTimeout } from "cucumber";
import { browser, promise } from "protractor";

setDefaultTimeout(browser.params.cucumberDefaultTimeout);

After(function(scenario: any): promise.Promise<void> {
    const world = this;

    if (
        scenario.result.status === "failed" &&
        browser.params.cucumberHtmlReport === "true" &&
        browser.params.cucumberHtmlReportScreenshot === "true"
    ) {
        return browser.takeScreenshot().then(screenShot => {
            world.attach(screenShot, "image/png");
        });
    }
});
