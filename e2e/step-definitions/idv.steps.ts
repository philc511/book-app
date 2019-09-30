import { use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { binding, given } from "cucumber-tsflow";
import { E2eTestContext } from "../support/e2e-test-context";

@binding([E2eTestContext])
export class IdvStepDefinitions {

    constructor(private testContext: E2eTestContext) {
        use(chaiAsPromised);
    }

    @given(/^I fill all the details in ID and Verification page$/)
    async iFillAllDetailsInIDV(): Promise<any> {
        await this.iAddFirstName("first");
        await this.iAddSurname("last");
        await this.iAddRelationship("Spouse");
    }

    @given(/^I add a Claimant FirstName "([^"]*)" on the ID and Verification page$/)
    async iAddFirstName(firstName: string): Promise<any> {
        this.testContext.claim.firstName = firstName;
        await this.testContext.idvPage.setFirstName(firstName);
    }

    @given(/^I add a Claimant Surname "([^"]*)" on the ID and Verification page$/)
    async iAddSurname(surname: string): Promise<any> {
        this.testContext.claim.surname = surname;
        await this.testContext.idvPage.setSurname(surname);
    }

    @given(/^I add a Claimant Relationship "([^"]*)"$/)
    async iAddRelationship(relationship: string): Promise<any> {
        this.testContext.claim.relationship = relationship;
        await this.testContext.idvPage.setRelationshipType(relationship);
    }

    @given(/^I add a Claimant Other Relationship "([^"]*)"$/)
    async iAddOtherRelationship(relationship: string): Promise<any> {
        this.testContext.claim.relationship = relationship;
        await this.testContext.idvPage.setOtherRelationship(relationship);
    }

    @given(/^I click Confirm on the ID and Verification page$/)
    async iClickProceedOnIDV(): Promise<any> {
        this.testContext.deathPage = await this.testContext.idvPage.proceed();
    }
}