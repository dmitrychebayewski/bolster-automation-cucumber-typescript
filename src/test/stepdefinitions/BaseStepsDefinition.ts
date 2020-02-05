import {HomePageObject} from "src/test/pageobjects/HomePageObject";

export default abstract class BaseStepsDefinition {
    protected getHomePageObject() {
        return new HomePageObject();
    }
}