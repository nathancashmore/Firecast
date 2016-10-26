class PlayPage {
  constructor(browser) {
    this.browser = browser;
  }

  play(track) {
    return this.browser.visit(`/play?track=${track}`);
  }

  isPlaying(item) {
    return this.browser.assert.text('#playing', item);
  }

}
module.exports = PlayPage;
