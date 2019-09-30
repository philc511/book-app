import { use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { binding, given } from "cucumber-tsflow";
import { E2eTestContext } from "../support/e2e-test-context";
import { Contact } from '../support/claim-data';
import { generateRandomString, generateRandomPhoneNumber } from '../support/utils';

@binding([E2eTestContext])
export class ContactsStepDefinitions {

    constructor(private testContext: E2eTestContext) {
        use(chaiAsPromised);
    }

    @given(/^I fill all the details in Edit contact details page$/)
    async iFillAllDetailsInContacts(): Promise<any> {
        await this.iAddEmail(generateRandomString(5) + "@" + generateRandomString(5));
        await this.iAddPhoneMain(generateRandomPhoneNumber());
        await this.iAddPhoneOther(generateRandomPhoneNumber());
        await this.iAddPreferences(generateRandomString(20));
        await this.iChooseFirstAddressWithPostcode("EH2 1DG");
    }

    async iAddFirstName(firstName: string): Promise<any> {
        this.testContext.claim.getCurrentContact().firstName = firstName;
        await this.testContext.contactsPage.setFirstName(firstName);
    }

    async iAddSurname(surname: string): Promise<any> {
        this.testContext.claim.getCurrentContact().surname = surname;
        await this.testContext.contactsPage.setSurname(surname);
    }

    async iAddRelationship(relationship: string): Promise<any> {
        this.testContext.claim.getCurrentContact().relationship = relationship;
        await this.testContext.contactsPage.setRelationshipType(relationship);
    }

    async iAddOtherRelationship(relationship: string): Promise<any> {
        this.testContext.claim.getCurrentContact().relationship = relationship;
        await this.testContext.contactsPage.setOtherRelationship(relationship);
    }

  async iAddEmail(email: string): Promise<any> {
    this.testContext.claim.getCurrentContact().email = email;
    await this.testContext.contactsPage.setEmail(email);
}

async iAddPhoneMain(phoneMain: string): Promise<any> {
  this.testContext.claim.getCurrentContact().phoneMain = phoneMain;
  await this.testContext.contactsPage.setMobileMain(phoneMain);
}

async iAddPhoneOther(phoneOther: string): Promise<any> {
  this.testContext.claim.getCurrentContact().phoneOther = phoneOther;
  await this.testContext.contactsPage.setMobileOther(phoneOther);
}

async iAddPreferences(prefs: string): Promise<any> {
  this.testContext.claim.getCurrentContact().preferences = prefs;
  await this.testContext.contactsPage.setPrefs(prefs);
}

async iChooseFirstAddressWithPostcode(postcode: string): Promise<any> {
  this.testContext.claim.getCurrentContact().postcode = postcode;
  await this.testContext.contactsPage.setPostcode(postcode);
  await this.testContext.contactsPage.lookupPostcode();
  await this.testContext.contactsPage.choosePostcode();
}

    @given(/^I Click Save and exit in Edit contact details page$/)
    async iClickProceedOnIDV(): Promise<void> {
        this.testContext.claim.contacts.push({} as Contact);
        await this.testContext.contactsPage.saveAndExit();
    }
}
