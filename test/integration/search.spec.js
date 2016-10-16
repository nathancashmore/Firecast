const helper = require('../specHelper');

const searchPage = helper.searchPage;
const expect = require('chai').expect;

describe('Search page', () => {
  it('should display search page', () =>
    searchPage.visit()
      .then(() => expect(searchPage.browser.assert.success()))
      .then(() => expect(searchPage.browser.assert.text('#title', 'Sonos Search')))
  );

  it('should display what you search for', () =>
    searchPage.search('something')
      .then(() => expect(
        searchPage.browser.assert.text('#result', 'You searched for something...')))
  );
});
