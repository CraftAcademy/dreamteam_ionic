import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageTitleText(name) {
    return element(by.tagName('page-' + name)).element(by.tagName('ion-title')).getText();
  }
}