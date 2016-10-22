const helper = require('../specHelper');

const searchPage = helper.searchPage;
const expect = require('chai').expect;

describe('Search page', () => {
  it('should display search page', () =>
    searchPage.visit()
      .then(() => expect(searchPage.browser.assert.success()))
      .then(() => expect(searchPage.browser.assert.text('#title', 'Search')))
  );

  it('should display plex directories based on path', () =>
    searchPage.visit('/library')
      .then(() => expect(searchPage.menuItemContains('1', 'Library Sections')))
      .then(() => expect(searchPage.menuItemContains('2', 'Recently Added Content')))
      .then(() => expect(searchPage.menuItemContains('3', 'On Deck Content')))
  );

  it('should display plex library by default', () =>
    searchPage.browser.visit('/search')
      .then(() => expect(searchPage.menuItemContains('1', 'Library Sections')))
      .then(() => expect(searchPage.menuItemContains('2', 'Recently Added Content')))
      .then(() => expect(searchPage.menuItemContains('3', 'On Deck Content')))
  );
});
