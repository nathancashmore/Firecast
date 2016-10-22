const express = require('express');
const sonos = require('sonos');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  sonos.search((device) => {
    device.currentTrack((error, track) => {
      res.render('status', {
        playing: {
          title: track.title,
          artist: track.artist,
          album: track.album,
        },
      });
    });
  });
});

module.exports = router;
