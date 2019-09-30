import { DatePipe } from "@angular/common";
import { assert } from "chai";
import { binding, given } from "cucumber-tsflow";
import { AppPage } from "../page-objects";
import { E2eTestContext } from "../support/e2e-test-context";
import { generateRandomPolicyNumber } from "../support/utils";

@binding([E2eTestContext])
export class AddClaimStepDefinitions {

    datePipe = new DatePipe("en-UK");

    constructor(private testContext: E2eTestContext) {
    }

    @given(/^I should get an error message "([^"]*)" for "([^"]*)"$/)
    async iShouldGetAnErrorMessage(expectedError: string, elt: string): Promise<any> {
        const actualError = await AppPage.getErrorText(elt);
        assert.equal(actualError, expectedError);
    }
}
