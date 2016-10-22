class PlayPage {
  constructor(browser) {
    this.browser = browser;
  }

  play(track) {
    return this.browser.visit(`/play?track=${track}`);
  }
}
module.exports = PlayPage;
