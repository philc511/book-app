import { assert, use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { binding, then } from "cucumber-tsflow";
import { E2eTestContext } from "../support/e2e-test-context";
import { Note } from '../support/claim-data';
import { generateRandomString } from '../support/utils';

@binding([E2eTestContext])
export class SummaryStepDefinitions {

    constructor(private testContext: E2eTestContext) {
        use(chaiAsPromised);
    }

    @then(/^I should see Claims Summary page with correct claim data displayed$/)
    async iShouldSeeClaimsSummaryPageWithCorrectData(): Promise<any> {
        const summaryText: string = await this.testContext.summaryPage.getSummaryText();

        this.assertInSummary(summaryText, this.testContext.claim.policyNumber, "Policy number not in summary");

        this.iShouldSeeCorrectDeathDetailsOnSummaryPage();

        this.iShouldSeeCorrectContactDetailsOnSummaryPage();
    }

    async iShouldSeeCorrectDeathDetailsOnSummaryPage(): Promise<void> {
      const summaryText: string = await this.testContext.summaryPage.getSummaryText();

      this.assertInSummary(summaryText, this.testContext.claim.deathCertficateReference, "Death cert ref not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.deathCertficateType, "Death cert type not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.dateOfDeath, "Date of death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.countryOfDeath, "Country of death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.placeOfDeath, "Place of death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.cause1a, "Cause 1a of death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.cause1b, "Cause 1b death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.cause1c, "Cause 1c of death not in summary");
      this.assertInSummary(summaryText, this.testContext.claim.cause2, "Cause 2 of death not in summary");
      this.assertInSummary( summaryText, this.testContext.claim.causeOther, "Cause other of death not in summary");
  }

  async iShouldSeeCorrectContactDetailsOnSummaryPage(): Promise<void> {
    const summaryText: string = await this.testContext.summaryPage.getSummaryText();

    this.assertInSummary(summaryText, this.testContext.claim.getCurrentContact().firstName, "First name not in summary");
    this.assertInSummary(summaryText, this.testContext.claim.getCurrentContact().surname, "Surname  not in summary");
    this.assertInSummary(summaryText, this.testContext.claim.getCurrentContact().relationship, "Relationship not in summary");
}

    private assertInSummary(summaryText: string, value: string, message: string) {
        assert.isTrue(!value || summaryText.includes(value), message);
    }

    @then(/^I navigate to "Summary"$/)
    async iNavigateToSummary(): Promise<void> {
        this.testContext.summaryPage = await this.testContext.sideBarPage.navigateToSummary();
    }

    @then(/^I click Exit$/)
    async iClickExit(): Promise<any> {
        await this.testContext.sideBarPage.leavePage();
    }

    @then(/^I fill in comment "([^"]*)"$/)
    async iFillInComment(comment: string): Promise<void> {
      this.testContext.claim.getCurrentNote().comment = comment;
      await this.testContext.summaryPage.setComment(comment);
    }

    @then(/^I click Add in Summary page$/)
    async iClickAddinSummaryPage(): Promise<void> {
        this.testContext.claim.notes.push({} as Note);
        await this.testContext.summaryPage.addComment();
    }
    @then(/^I fill Comment and Evidence on Summary page$/)
    async iAddCommentAndEvidenceOnSummaryPage() {
        this.iFillInComment(generateRandomString(10));

    }

}
