class StatusPage {
  constructor(browser) {
    this.browser = browser;
  }

  visit() {
    return this.browser.visit('/status');
  }

  isPlaying(item) {
    return this.browser.assert.text('#playing', item);
  }

}
module.exports = StatusPage;
