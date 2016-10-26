const helper = require('../specHelper');

const playPage = helper.playPage;

const billieJeanTrack = '/library/parts/5430/file.mp3';

describe('Play page', () => {
  before((done) => {
    playPage.play(billieJeanTrack)
      .then(() => done());
  });

  it('should display what is currently playing', () =>
    playPage.isPlaying('Billie Jean by Michael Jackson')
  );
});
