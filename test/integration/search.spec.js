const helper = require('../specHelper');

const searchPage = helper.searchPage;
const playPage = helper.playPage;

const expect = require('chai').expect;

describe('Search page', () => {
  it('should display search page', () =>
    searchPage.browser.visit('/search')
      .then(() => expect(searchPage.browser.assert.success()))
      .then(() => expect(searchPage.browser.assert.text('#title', 'Search')))
  );

  it('should display plex directories based on path', () =>
    searchPage.visit('/library/sections/2/folder?parent=85')
      .then(() => expect(searchPage.menuItemContains('1', 'Random Access Memories')))
  );

  it('should display plex music folder by default', () =>
    searchPage.browser.visit('/search')
      .then(() => expect(searchPage.menuItemContains('1', 'Adele')))
  );

  it('should display plex tracks based on path', () =>
    searchPage.visit('/library/sections/2/folder?parent=86')
      .then(() => expect(searchPage.menuItemContains('1', 'Get Lucky')))
  );

  it('should display play page when track selected', () =>
    searchPage.visit('/library/sections/2/folder?parent=86')
      .then(() => searchPage.clickMenuItem('Get Lucky'))
      .then(() => playPage.isPlaying('Get Lucky by Daft Punk'))
  );
});
