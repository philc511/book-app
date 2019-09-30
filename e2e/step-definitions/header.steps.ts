import { expect, use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { binding, given, then, when } from "cucumber-tsflow";

import { AppPage } from "../page-objects";
import { E2eTestContext } from "../support/e2e-test-context";

@binding([E2eTestContext])
export class HeaderStepDefinitions {

    constructor(private testContext: E2eTestContext) {
        use(chaiAsPromised);
    }

    @given(/^I start the Application$/)
    async iStartTheReferenceApplication(): Promise<any> {
        this.testContext.dashboardPage = await AppPage.navigateToBase();
    }

    @then(/^the header text will be displayed$/)
    theHeaderTextWillBeDisplayed(): any {
        const text = AppPage.getHeaderText();
        return expect(text).to.eventually.have.string("CLARA");
    }
}