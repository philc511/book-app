import { browser, by, element, ElementFinder, Locator, protractor } from "protractor";

/**    goToLink(arg0: any): any {
        throw new Error("Method not implemented.");
    }

 * Represents an HTML <table />
 */

export class Table {
  private readonly locator: Locator;
  private readonly containerLocator: Locator;

  constructor(locator: Locator, containerLocator?: Locator) {
    this.locator = locator;
    this.containerLocator = containerLocator
      ? containerLocator
      : by.css("body");
  }

  /**
   * Return the text from the table body as an array of arrays of strings.
   * E.g. [["Row 1 Col 1", "R1C2"], ["R2C1", "R2C2"]]
   * This matches the output from cucumber's DataTable.rows(), so is suitable for assert.deepEqual() comparison.
   * See https://github.com/cucumber/cucumber-js/blob/master/features/data_tables.feature#L50
   */
  async rows(excludedColumns?: string[]): Promise<string[][]> {
    const containerElt = await element(this.containerLocator);

    const tableElt: ElementFinder = await containerElt.element(this.locator);

    // added in to try to avoid occasional errors when element is not found
    const until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(tableElt), 2000, "Element taking too long to appear in the DOM");

    const rows: ElementFinder[] = await tableElt.all(by.css("tbody tr"));

    const excludedColumnIndexes = await this.GetExcludedColumnIndexes(
      excludedColumns
    );

    const result: string[][] = [];
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      const cells: ElementFinder[] = await row.all(by.tagName("td"));
      let cellTexts = await Promise.all(
        cells.map(async cell => cell.getText())
      );

      if (excludedColumnIndexes) {
        const tempCellTexts: string[] = [];
        for (
          let columnIndex = 0;
          columnIndex < cellTexts.length;
          columnIndex++
        ) {
          if (!excludedColumnIndexes.find(column => column === columnIndex)) {
            tempCellTexts.push(cellTexts[columnIndex]);
          }
        }

        cellTexts = tempCellTexts;
      }
      result.push(cellTexts);
    }

    return result;
  }

  /**
   * Get the Headings on the Table
   */
  async headings(): Promise<string[]> {
    const headerRow: ElementFinder = await element(this.containerLocator)
      .element(this.locator)
      .element(by.css("thead tr"));

    if (headerRow) {
      const rowHeaders: ElementFinder[] = await headerRow.all(by.tagName("th"));

      return await Promise.all(
        rowHeaders.map(async heading => heading.getText())
      );
    }
  }

  async goToLink(linkString: string): Promise<boolean> {
    const containerElt = await element(this.containerLocator);

    const tableElt: ElementFinder = await containerElt.element(this.locator);

    // added in to try to avoid occasional errors when element is not found
    const until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(tableElt), 10000, "Element taking too long to appear in the DOM");

    const rows: ElementFinder[] = await tableElt.all(by.css("tbody tr"));

    let linkCell: ElementFinder;
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      const cells: ElementFinder[] = await row.all(by.tagName("a"));
      for (let j = 0; j < cells.length; j++) {
        const cellText = await cells[j].getText();
        if (cellText === linkString) {
          linkCell = cells[j];
          break;
        }
      }
      if (linkCell) {
        break;
      }
    }
    if (linkCell) {
      await linkCell.click();
      return true;
    }
    return false;
  }

  async goToFirstLink(): Promise<boolean> {
    const tableElt = await element(this.containerLocator).element(this.locator);
    const rows: ElementFinder[] = await tableElt.all(by.css("tbody tr"));

    let linkCell: ElementFinder;
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      const cells: ElementFinder[] = await row.all(by.tagName("a"));
      if (cells.length > 0) {
        await cells[0].getText();
        linkCell = cells[0];
        break;
      }
      if (linkCell) {
        break;
      }
    }
    if (linkCell) {
      await linkCell.click();
      return true;
    }
    return false;
  }

  private async GetExcludedColumnIndexes(excludedColumns?: string[]) {
    const excludedColumnIndexes: number[] = [];

    if (excludedColumns) {
      const columnHeadings = await this.headings();

      if (columnHeadings) {
        for (let index = 0; index < columnHeadings.length; index++) {
          if (
            excludedColumns.find(
              column =>
                column.toLowerCase() === columnHeadings[index].toLowerCase()
            )
          ) {
            excludedColumnIndexes.push(index);
          }
        }
      }
    }

    return excludedColumnIndexes;
  }
}
