import { DashboardPage, DeathPage, IdvPage, SideBarPage, SummaryPage } from "../page-objects";
import { ClaimData } from "./claim-data";
import { ContactsPage } from '../page-objects/contacts.po';

export class E2eTestContext {
    idvPage = new IdvPage();
    dashboardPage = new DashboardPage();
    summaryPage = new SummaryPage();
    deathPage = new DeathPage();
    contactsPage = new ContactsPage();
    sideBarPage = new SideBarPage();
    claim = new ClaimData();

    constructor() {
        console.log("IN E2E CONSTRUCTOR");
    }
}
