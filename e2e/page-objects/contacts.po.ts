import { by, element, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { Clickable, TextInput, SelectInput } from "./components";

export class ContactsPage {

    constructor() {
    }

    async editContactDetails(): Promise<void> {
        await new Clickable(by.id("editContact")).click();
    }

    async addContactDetails(): Promise<void> {
        await new Clickable(by.id("addContact")).click();
    }

    async saveAndExit(): Promise<void> {
      await new Clickable(by.id("saveAndExit")).click();
  }

    async checkPageIsContactDetails(): Promise<boolean> {
        return "Edit contact details" === await element(by.tagName("h2")).getText();
    }

    async setFirstName(firstName: string): Promise<any> {
        await new TextInput("firstName").setText(firstName);
  }

    async setSurname(surname: string): Promise<any> {
        await new TextInput("surname").setText(surname);
    }

    async setRelationshipType(relationshipType: string): Promise<any> {
        await new SelectInput("relationship").setText(relationshipType);
    }

    async setOtherRelationship(otherRelationship: string): Promise<any> {
        await new TextInput("otherRelationship").setText(otherRelationship);
  }

async setMobileMain(mobileNo: string): Promise<any> {
    await new TextInput("mobilea").setText(mobileNo);
}

async setMobileOther(mobileNo: string): Promise<any> {
    await new TextInput("mobileb").setText(mobileNo);
}

async setEmail(email: string): Promise<any> {
    await new TextInput("email").setText(email);
}

async setPrefs(prefs: string): Promise<any> {
  await new TextInput("prefs").setText(prefs);
}

  async setPostcode(postcode: string): Promise<void> {
    await new TextInput("postcode").setText(postcode);
  }

  async lookupPostcode(): Promise<void> {
    await new Clickable(by.id("lookup")).click();
}

async choosePostcode(): Promise<void> {
  await new SelectInput("POSTCODELIST").chooseFirst();
}
}
