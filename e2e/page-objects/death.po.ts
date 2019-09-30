import { by, element, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { Clickable, TextInput } from "./components";

export class DeathPage {
    private interimCertificateType: ElementFinder;
    private fullCertificateType: ElementFinder;
    private countryOfDeath: ElementFinder;

    constructor() {
        this.interimCertificateType = element(by.id("interimCertificateType"));
        this.fullCertificateType = element(by.id("fullCertificateType"));
        this.countryOfDeath = element(by.id("countryOfDeathId"));
    }

    async setDeathCertificateType(certType: string): Promise<any> {
        if (certType.toLowerCase() === "full") {
            await this.fullCertificateType.click();
        } else if (certType.toLowerCase() === "interim") {
            await this.interimCertificateType.click();
        } else {
            fail("Unrecognized certificate type " + certType);
        }
    }

    async setDeathCertificateTypeInterim(): Promise<any> {
        await this.interimCertificateType.click();
    }

    async enterDate(date: string): Promise<any> {
        await new TextInput("dateOfDeath").setText(date);
    }

    async enterCountryOfDeath(country: string): Promise<any> {
        this.countryOfDeath.clear().then(_ => this.countryOfDeath.sendKeys(country));
        await this.countryOfDeath.sendKeys(protractor.Key.TAB);
        await this.countryOfDeath.sendKeys(protractor.Key.TAB);
    }

    async enterPlaceOfDeath(place: string): Promise<any> {
        await new TextInput("placeOfDeath").setText(place);
    }

    async enterCause1a(cause: string): Promise<any> {
        await new TextInput("primaryCauseA").setText(cause);
    }

    async enterCause1b(cause: string): Promise<any> {
        await new TextInput("primaryCauseB").setText(cause);
    }

    async enterCause1c(cause: string): Promise<any> {
        await new TextInput("primaryCauseC").setText(cause);
    }

    async enterCause2(cause: string): Promise<any> {
        await new TextInput("secondaryCause").setText(cause);
    }

    async enterCauseOther(cause: string): Promise<any> {
        await new TextInput("otherCauseDetails").setText(cause);
    }

    async setDeathCertificateRef(deathCertificateRef: string): Promise<any> {
        await new TextInput("deathCertificateRef").setText(deathCertificateRef);
    }

    async saveDeathDetails(): Promise<void> {
        await new Clickable(by.id("idvProceed")).click();
    }

    async checkPageIsDeathDetails(): Promise<any> {
        return "Death certificate details" === await element(by.tagName("h2")).getText();
    }
}