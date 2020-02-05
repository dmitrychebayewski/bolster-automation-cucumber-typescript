import {AbstractEntity} from "src/test/pageobjects/AbstractEntity";
import {MenuNavigationDescriptor} from "src/test/model/MenuNavigationDescriptor";


export class NavigationMenu extends AbstractEntity {
    private static SELF_SELECTOR = '.navDropdown';
    private static MENU_BUTTON_SELECTOR = '.btn.navToggler';
    private static MENU_CONTAINER_SELECTOR = '.menu';
    private static SUBMENU_TITLE_SELECTOR = '.submenuTitle';


    protected getSearchContext(): string {
        return NavigationMenu.SELF_SELECTOR;
    }

    private isMainMenuClosed(): boolean {
        return !this.findElement(NavigationMenu.MENU_CONTAINER_SELECTOR).isDisplayed();
    }

    private openMenu():void {
        this.findElements(NavigationMenu.MENU_BUTTON_SELECTOR)[0].click();
        browser.pause(1000);
    }

    public selectAndClick(navMenuItem: string): void {
        this.findElement(`//a[text()='${navMenuItem}']`).click();
    }


    public navigateTo(navigation: MenuNavigationDescriptor): void {
        if(this.isMainMenuClosed()){
            this.openMenu();
        }
        this.selectAndClick(navigation.menuItem);
        this.findElement(NavigationMenu.SUBMENU_TITLE_SELECTOR).waitForExist(200);
        this.findElement(`=${navigation.subMenuItem}`).click();
    }

}