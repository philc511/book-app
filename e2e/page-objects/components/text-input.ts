import { by, element, ElementFinder } from "protractor";

/**
 * Represents a <input type="text" /> or custom fw-input field.
 */
export class TextInput {
  private readonly element: ElementFinder;


// Any of the Framework components (fw-input, fw-textarea) will name the child html element with
// with the same id so this function will look for the second/last element (ie the child element)
// with the given id
constructor(id: string) {
      this.element = element.all(by.id(id)).last();
  }

  async getText(): Promise<string> {
    return this.element.getAttribute("value");
  }

  async setText(value: string): Promise<void> {
    return await this.element.clear().then(_ => this.element.sendKeys(value));
  }

  async isPresent(): Promise<boolean> {
    return this.element.isPresent();
  }
}
