import {AbstractEntity} from "src/test/pageobjects/AbstractEntity";

export class AboutUsPageObject extends AbstractEntity {
    private static SELF_SELECTOR = '.body';
    private static TITLE_SELECTOR = '.text-center h1';
    private static PICS_SELECTOR = '.speaker.item img';


    protected getSearchContext(): string {
        return AboutUsPageObject.SELF_SELECTOR;
    }

    public getTitle(): string {
        return this.findElement(AboutUsPageObject.TITLE_SELECTOR).getText();
    }

    public getPicsUrlList(): Array<string> {
        return this.findElements(AboutUsPageObject.PICS_SELECTOR)
            .map(e=>e.getAttribute('src')).filter(function(value, index, self) {
                return self.indexOf(value) === index;
            });
    }
}