import {WebElement} from "src/test/pageobjects/components/WebElement";

export abstract class AbstractEntity {
    protected abstract getSearchContext():string;

    protected findElement(selector: string):WebElement {
        return this.getWebElement(this.getSearchContext()).findElement(selector);
    }
    protected findElements(selector: string):Array<WebElement> {
        return this.getWebElement(this.getSearchContext()).findElements(selector);
    }
    protected getWebElement(selector: string): WebElement {
        return new WebElement($(selector));
    }
}