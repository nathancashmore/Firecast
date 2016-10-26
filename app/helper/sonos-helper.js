const sonos = require('sonos');

class SonosHelper {

  play(track, callback) {
    sonos.search((device) =>
      device.play(track, () =>
        callback()
      )
    );
  }

  whatsPlaying(callback) {
    sonos.search((device) =>
      device.currentTrack((error, track) =>
        callback({
          playing: {
            title: track.title,
            artist: track.artist,
            album: track.album,
          },
        })
      )
    );
  }
}

module.exports = SonosHelper;
