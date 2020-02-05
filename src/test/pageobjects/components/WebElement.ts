/**
 * Wrapper around the {@see WebdriverIO.Element} class
 */
export class WebElement {
    private element: WebdriverIO.Element;

    constructor(element: WebdriverIO.Element) {
        this.element = element;
    }
    public findElement(selector: string):WebElement {
        return new WebElement(this.element.$(selector));
    }
    public findElements(selector: string):Array<WebElement> {
        return this.element.$$(selector).map(e => new WebElement(e));
    }


    public getAttribute(attributeName: string): string {
        return this.element.getAttribute(attributeName);
    }

    public getText(): string {
        return this.element.getText();
    }

    public click(): void {
        this.element.click();
    }

    public moveToItem(xoffset?: number,
                      yoffset?: number): void {
        this.element.moveTo(xoffset, yoffset);
    }

    public isDisplayed():boolean {
        return this.element.isDisplayed();
    }

    public waitForExist(ms?: number, reverse?: boolean, error?: string): boolean {
        return this.element.waitForExist(ms, reverse, error);
    }
}