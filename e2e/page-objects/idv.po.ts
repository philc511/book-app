import { by } from "protractor";
import { DeathPage } from "../page-objects/death.po";
import { Clickable, SelectInput, TextInput } from "./components";

export class IdvPage {

    constructor() {
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

    async proceed(): Promise<DeathPage> {
        await new Clickable(by.id("footerConfirm")).click();
        return new DeathPage();
    }
}