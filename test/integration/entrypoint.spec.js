const helper = require('../specHelper');
const expect = require('chai').expect;
const browser = helper.browser;

describe('Entrypoint', () => {
  it('should successfully display search page as the entry point', () =>
    browser.visit('/')
      .then(() => expect(browser.assert.success()))
  );
});
