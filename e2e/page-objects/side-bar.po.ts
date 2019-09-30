import { by } from "protractor";
import { Clickable } from "./components";
import { DeathPage } from "./death.po";
import { SummaryPage } from "./summary.po";

export class SideBarPage {

    async navigateToDeathDetails(): Promise<DeathPage> {
        await new Clickable(by.id("deathdetailslink")).click();
        return new DeathPage();
    }

    async navigateToSummary(): Promise<SummaryPage> {
        await new Clickable(by.id("summarylink")).click();
        return new SummaryPage();
    }

    async leavePage(): Promise<void> {
        await new Clickable(by.id("exit")).click();
    }
}