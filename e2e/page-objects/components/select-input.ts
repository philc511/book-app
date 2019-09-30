import { by, element, ElementFinder, protractor } from "protractor";

/**
 * Represents a <select> or custom <fw-select> field.
 */
export class SelectInput {
  private readonly element: ElementFinder;


// Any of the Framework components (fw-select) will name the child html element with
// with the same id so this function will look for the second/last element (ie the child element)
// with the given id
  constructor(id: string) {
      this.element = element.all(by.id(id)).last();
  }

  async getText(): Promise<string> {
    return this.element.getAttribute("value");
  }

  async setText(value: string): Promise<void> {
    return await this.element.sendKeys(value);
  }

  async isPresent(): Promise<boolean> {
    return this.element.isPresent();
  }

  async chooseFirst(): Promise<void> {
    await this.element.sendKeys(protractor.Key.ARROW_DOWN);

  }
}
