const sonos = require('sonos');

class SonosHelper {

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
