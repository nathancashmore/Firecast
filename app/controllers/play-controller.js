const express = require('express');
const sonos = require('sonos');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  sonos.search((device) => {
    device.play(`${res.locals.plexServer}${req.query.track}`, () => {
      res.redirect('/status');
    });
  });
});

module.exports = router;
