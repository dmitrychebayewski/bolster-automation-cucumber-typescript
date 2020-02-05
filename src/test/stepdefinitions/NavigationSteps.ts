import {expect} from 'chai';
import {binding, given, when, then} from 'cucumber-tsflow';
import BaseStepsDefinition from './BaseStepsDefinition';
import {LanguageSelection} from "src/test/pageobjects/components/LanguageSelection";
import {TableDefinition} from 'cucumber'
import {MenuNavigationDescriptor} from "src/test/model/MenuNavigationDescriptor";
import {NavigationMenu} from "src/test/pageobjects/components/NavigationMenu";

@binding()
export class NavigationSteps extends BaseStepsDefinition {
    @given(/^The user opens Bolster home page$/)
    public openHomePage() {
        const homePo = this.getHomePageObject();
        homePo.open();
    }

    @when(/^The user selects the "([^"]*)" language$/)
    public selectLanguage(language: string) {
        const languageSelection = new LanguageSelection();
        languageSelection.selectLanguage(language);
    }

    @when(/^The user navigates through the navigation menu:$/)
    public selectMenuItem (menuItems: TableDefinition) {
        let navigation = menuItems.hashes()[0];
        const descriptor: MenuNavigationDescriptor = {menuItem: `${navigation.menuItem}`,
            subMenuItem: `${navigation.subMenuItem}`};
        new NavigationMenu().navigateTo(descriptor);
    }

    @then(/^The home page title is "([^"]*)"$/)
    public checkPageTitle (title: string) {
        const homePo = this.getHomePageObject();
        expect(homePo.getTitle()).to.equal(title);
    }
}