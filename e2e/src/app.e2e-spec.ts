import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';
import { fillMaterialFieldById } from './utils';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a logo with name Note.Book', async () => {
    await page.navigateTo();
    expect(await page.getLogoText()).toEqual('Note.Book');
  });

  it('should have a logo with src assets/logo.png', async () => {
    await page.navigateTo();
    expect((await page.getLogoSrc()).includes('assets/logo.png')).toBeTruthy();
  });

  it('should Frequency Check Message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Frequency Check');
  });

  it('should have a first paragraph have a frequency word', async () => {
    await page.navigateTo();
    await fillMaterialFieldById("textAreaField", "Word Words Wor word");
    await element(by.css('button[type="submit"]')).click();
    expect(await page.getFirstParagraphInWordResult()).toEqual('When the frequency of the word " Word " is requested');
  });

  it('should have a second paragraph have a counts word', async () => {
    await page.navigateTo();
    await fillMaterialFieldById("textAreaField", "Word Words Wor word");
    await element(by.css('button[type="submit"]')).click();
    expect(await page.getSecondParagraphInWordResult()).toEqual('Then the frequency is determined to be " 1"');
  });

  it('should have a third paragraph have a similar words list', async () => {
    await page.navigateTo();
    await fillMaterialFieldById("textAreaField", "Word Words Wor word");
    await element(by.css('button[type="submit"]')).click();
    expect(await page.getThirdParagraphInWordResult()).toEqual('And the list of similar words is determined to be " Words Wor word"');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
