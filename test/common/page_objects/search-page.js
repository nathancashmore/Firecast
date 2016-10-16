class SearchPage {
  constructor(browser) {
    this.browser = browser;
  }

  visit() {
    return this.browser.visit('/search');
  }

  search(item) {
    return this.browser.fill('#term', item).pressButton('Search');
  }

}
module.exports = SearchPage;
