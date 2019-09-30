import { by, element } from "protractor";
import { Clickable, Table, TextInput } from "./components";
import { IdvPage } from "./idv.po";
import { SideBarPage } from "./side-bar.po";


export class DashboardPage {
    private claimTable: Table;

    constructor() {
        this.claimTable = new Table(by.id("claimList"));
    }

    async setSearch(planNumber: string): Promise<void> {
        await new TextInput("planNumber").setText(planNumber);
    }

    async doSearch(): Promise<void> {
        await new Clickable(by.id("search")).click();
    }

    async launchIdv(): Promise<any> {
        await new Clickable(by.id("launchIdv")).click();
        return new IdvPage();
    }

    async viewSummary(): Promise<SideBarPage> {
        await new Clickable(by.id("viewSummary")).click();
        return new SideBarPage();
    }



    async getClaimsList(): Promise<string[][]> {
        return await this.claimTable.rows();
    }

    async goToClaimSummary(policyNumber: string): Promise<boolean> {
        return await this.claimTable.goToLink(policyNumber);
    }

    async goToAClaimSummary(): Promise<boolean> {
        return await this.claimTable.goToFirstLink();
    }

    async checkPageIsDashboard(): Promise<boolean> {
        return "Claims" === await element(by.tagName("h2")).getText();
    }
}