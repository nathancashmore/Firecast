const helper = require('../specHelper');

const statusPage = helper.statusPage;
const playPage = helper.playPage;

const billieJeanTrack = '/library/parts/5430/file.mp3';

describe('Status page', () => {
  before((done) => {
    playPage.play(billieJeanTrack)
      .then(() => done());
  });

  it('should display what is currently playing', () =>
    statusPage.isPlaying('Billie Jean by Michael Jackson')
  );
});
