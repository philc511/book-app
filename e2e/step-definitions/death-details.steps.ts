import { DatePipe } from "@angular/common";
import { binding, given } from "cucumber-tsflow";
import { E2eTestContext } from "../support/e2e-test-context";

@binding([E2eTestContext])
export class DeathDetailsStepDefinitions {

    datePipe = new DatePipe("en-UK");

    constructor(private testContext: E2eTestContext) {
    }

    @given(/^I navigate to "Death details"$/)
    async iNavigateToDeathDetails(): Promise<any> {
        this.testContext.deathPage = await this.testContext.sideBarPage.navigateToDeathDetails();
    }

    @given(/^I should see Death Certificate Details page$/)
    async iLandOnDeathCertificateDetails(): Promise<void> {
        if (await this.testContext.deathPage.checkPageIsDeathDetails()) {
            return;
        } else {
            fail("Not on death details page");
        }
    }

    @given(/^I fill all the details in Death Details page$/)
    async iFillAllTheDetailsInDeathDetails(): Promise<void> {
        await this.iNavigateToDeathDetails();
        await this.iAddDeathCertificateType("Full");
        // await this.iSelect Current date on Death Details page
        // await this.ienter Country of death as "France" on the Death Details page
        // await this.ienter Place of death as "test data" on the Death Details page
        // await this.ienter ia as "apple" on the Death Details page
        // await this.iadd a Death Certificate Reference "Test Pass" on the Death Details page
    }

    @given(/^I add a Death Certificate Reference "([^"]*)" on the Death Details page$/)
    async iAddDeathCertificateReference(certificateReference: string): Promise<any> {
        this.testContext.claim.deathCertficateReference = certificateReference;
        await this.testContext.deathPage.setDeathCertificateRef(certificateReference);
    }

    @given(/^I select a Death Certificate type "([^"]*)" on the Death Details page$/)
    async iAddDeathCertificateType(certificateType: string): Promise<any> {
        this.testContext.claim.deathCertficateType = certificateType;
        await this.testContext.deathPage.setDeathCertificateType(certificateType);
    }

    @given(/^I click Save to summary in Death Details page$/)
    async iClickProceedOnDeathDetails(): Promise<any> {
        await this.testContext.deathPage.saveDeathDetails();
    }

    @given(/^I select Current date on Death Details page$/)
    async iSelectCurrentDate(): Promise<any> {
        const today = this.datePipe.transform(new Date(), "dd/MM/yyyy");
        await this.iEnterDate(today);
    }

    @given(/^I select Future date on Death Details page$/)
    async iSelectFutureDate(): Promise<any> {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        const futureDateStr = this.datePipe.transform(futureDate, "dd/MM/yyyy");
        await this.iEnterDate(futureDateStr);
    }

    @given(/^I enter a date "([^"]*)" on the Death Details page$/)
    async iEnterDate(date: string): Promise<any> {
        this.testContext.claim.dateOfDeath = date;
        await this.testContext.deathPage.enterDate(date);
    }

    @given(/^I enter Country of death as "([^"]*)" on the Death Details page$/)
    async iEnterCountryOfDeath(country: string): Promise<any> {
        this.testContext.claim.countryOfDeath = country;
        await this.testContext.deathPage.enterCountryOfDeath(country);
    }

    @given(/^I enter Place of death as "([^"]*)" on the Death Details page$/)
    async iEnterPlaceOfDeath(place: string): Promise<any> {
        this.testContext.claim.placeOfDeath = place;
        await this.testContext.deathPage.enterPlaceOfDeath(place);
    }

    @given(/^I enter ia as "([^"]*)" on the Death Details page$/)
    async iEnterCause1a(cause: string): Promise<any> {
        this.testContext.claim.cause1a = cause;
        await this.testContext.deathPage.enterCause1a(cause);
    }

    @given(/^I enter ib as "([^"]*)" on the Death Details page$/)
    async iEnterCause1b(cause: string): Promise<any> {
        this.testContext.claim.cause1b = cause;
        await this.testContext.deathPage.enterCause1b(cause);
    }

    @given(/^I enter ic as "([^"]*)" on the Death Details page$/)
    async iEnterCause1c(cause: string): Promise<any> {
        this.testContext.claim.cause1c = cause;
        await this.testContext.deathPage.enterCause1c(cause);
    }

    @given(/^I enter ii as "([^"]*)" on the Death Details page$/)
    async iEnterCause2(cause: string): Promise<any> {
        this.testContext.claim.cause2 = cause;
        await this.testContext.deathPage.enterCause2(cause);
    }

    @given(/^I enter further secondary details as "([^"]*)" on the Death Details page$/)
    async iEnterCauseFurtherDetails(cause: string): Promise<any> {
        this.testContext.claim.causeOther = cause;
        await this.testContext.deathPage.enterCauseOther(cause);
    }
}
