const helper = require('../specHelper');

const mainPage = helper.mainPage;
const expect = require('chai').expect;

describe('Entry point', () => {
  it('should successfully display page', () =>
    mainPage.visit()
      .then(() => expect(mainPage.browser.assert.success()))
      .then(() => expect(mainPage.browser.assert.text('h1', 'Sample title')))
      .then(() => expect(mainPage.browser.assert.text('p', 'Welcome from i18n')))
  );
});
