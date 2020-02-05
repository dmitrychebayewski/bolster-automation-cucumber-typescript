import {AbstractEntity} from "src/test/pageobjects/AbstractEntity";

export class HomePageObject extends AbstractEntity{
    private static URL: string = 'http://bolstersafety.nl';
    private static SELF_SELECTOR: string = '.home';
    private static TITLE_SELECTOR: string = '.halfImageHeader__content h1';

    protected getSearchContext(): string {
        return HomePageObject.SELF_SELECTOR;
    }

    public open(): void {
        browser.url(HomePageObject.URL);
    }

    public getTitle(): string {
        return this.findElement(HomePageObject.TITLE_SELECTOR).getText();
    }

}
