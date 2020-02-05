import {AbstractEntity} from "src/test/pageobjects/AbstractEntity";
export class LanguageSelection extends AbstractEntity{
    private static CONTEXT_SELECTOR = '#menu-taal-menu';
    protected getSearchContext(): string {
        return LanguageSelection.CONTEXT_SELECTOR;
    }

    public selectLanguage(language: string): void {
        this.findElement(`=${language}`).click();
    }
}