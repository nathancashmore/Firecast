// eslint-disable-next-line no-unused-vars
const Replay = require('replay');
const helper = require('../specHelper');

const playPage = helper.playPage;

const daftPunkTrack = '/library/parts/1636/file.mp3';

describe('Play page', () => {
  it('should display what is currently playing', (done) =>
    playPage.play(daftPunkTrack)
      .then(() => playPage.isPlaying('Get Lucky by Daft Punk'))
      .then(() => done())
  );
});
