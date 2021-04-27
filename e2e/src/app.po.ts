import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('notebook-viewer .title')).getText();
  }

  async getLogoText(): Promise<string> {
    return element(by.css('notebook-logo div a')).getText();
  }

  async getLogoSrc(): Promise<string> {
    return element(by.css('notebook-logo div img')).getAttribute('src');
  }

  async getFirstParagraphInWordResult(): Promise<string> {
    return element(by.css('notebook-word-result p:first-child')).getText();
  }

  async getSecondParagraphInWordResult(): Promise<string> {
    return element(by.css('notebook-word-result p:nth-child(2)')).getText();
  }

  async getThirdParagraphInWordResult(): Promise<string> {
    return element(by.css('notebook-word-result p:nth-child(3)')).getText();
  }
}
