import { fail } from "assert";
import {assert, use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { binding, then } from "cucumber-tsflow";
import { IdvPage, SummaryPage } from "../page-objects";
import { E2eTestContext } from "../support/e2e-test-context";
import { testDataSet } from "../support/test-dataset";
import { deleteClaim } from "../support/utils";

@binding([E2eTestContext])
export class DashboardStepDefinitions {

    constructor(private testContext: E2eTestContext) {
        use(chaiAsPromised);
    }

    @then(/^I view summary for existing claim$/)
    async iViewSummaryForExistingClaim(): Promise<void> {
        await this.testContext.dashboardPage.setSearch(testDataSet.planForExistingClaim);
        await this.testContext.dashboardPage.doSearch();
        this.testContext.sideBarPage = await this.testContext.dashboardPage.viewSummary();
    }

    @then(/^I launch IDV for new claim$/)
    async iLaunchIdvForNewClaim(): Promise<void> {
        const planNumber = testDataSet.planForNewClaim;
        await deleteClaim(planNumber);
        console.log("MADE IT PAST THE DELETE");
        await this.testContext.dashboardPage.setSearch(planNumber);
        await this.testContext.dashboardPage.doSearch();
        this.testContext.idvPage = new IdvPage();
    }

    @then(/^I should see Policy Number "([^"]*)" on Landing page$/)
    async iShouldSeePolicyNumberOnDashboard(policyNumber: string): Promise<any> {
        const claims: string[][] = await this.testContext.dashboardPage.getClaimsList();
        assert.isDefined(claims.find(c => c[0] === policyNumber));
    }

    @then(/^I should see the valid Policy Number on Landing page$/)
    async iShouldSeeValidPolicyNumberOnDashboard(): Promise<any> {
        const claims: string[][] = await this.testContext.dashboardPage.getClaimsList();
        const policyNumber = this.testContext.claim.policyNumber;
        assert.isDefined(claims.find(c => c[0] === policyNumber), "unable to find policy number " + policyNumber + " on the dashboard");
    }

    @then(/^I should see all Claim details on Landing page$/)
    async iShouldSeeAllClaimDetailsOnDashboard(): Promise<any> {
        const claims: string[][] = await this.testContext.dashboardPage.getClaimsList();
        const policyNumber = this.testContext.claim.policyNumber;
        const name = this.testContext.claim.firstName + " " + this.testContext.claim.surname;
        const relationship = this.testContext.claim.relationship;
        assert.isDefined(
            claims.find(
                c =>
                c[0] === policyNumber &&
                c[1] === name &&
                c[2] === relationship
                ),
                "unable to find claim details for policy number " + policyNumber
                );
    }

    @then(/^I click to see the Claim Summary$/)
    async iClickToSeeTheClaimSummary(): Promise<any> {
        if (await this.testContext.dashboardPage.goToClaimSummary(this.testContext.claim.policyNumber)) {
            this.testContext.summaryPage = new SummaryPage();
        } else {
            fail("Unable to find the summary page link for " + this.testContext.claim.policyNumber);
        }
    }

    @then(/^I click to see a Claim Summary$/)
    async iClickToSeeAClaimSummary(): Promise<any> {
        if (await this.testContext.dashboardPage.goToAClaimSummary()) {
            this.testContext.summaryPage = new SummaryPage();
        } else {
            fail("Unable to find the summary page link for " + this.testContext.claim.policyNumber);
        }
    }

    @then(/^I am on the Dashboard$/)
    async iAmOnDashboard(): Promise<any> {
        if (await this.testContext.dashboardPage.checkPageIsDashboard()) {
            return;
        } else {
            fail("Not on dashboard page");
        }
    }
}
