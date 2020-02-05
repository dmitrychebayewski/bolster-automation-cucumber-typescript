import {expect} from 'chai';
import BaseStepsDefinition from "src/test/stepdefinitions/BaseStepsDefinition";
import {binding, then} from "cucumber-tsflow/dist";
import {AboutUsPageObject} from "src/test/pageobjects/AboutUsPageObject";

import {FileDownload} from "src/test/helper/FileDownload";

@binding()
export class AboutUsSteps extends BaseStepsDefinition {
    private static getPageObject(): AboutUsPageObject {
        return new AboutUsPageObject();
    }

    @then(/^About us page contains the "([^"]*)" title$/)
    public checkTitle(title: string) {
        expect(AboutUsSteps.getPageObject().getTitle()).to.equal(title);
    };

    @then(/^The speakers pics are downloaded$/)
    public downloadSpeakersPics() {
        AboutUsSteps.getPageObject().getPicsUrlList().forEach(
            url => FileDownload.download(url));
    }
}