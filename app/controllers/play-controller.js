const express = require('express');
const SonosHelper = require('../helper/sonos-helper');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const helper = new SonosHelper();
  helper.play(`${res.locals.plexServer}${req.query.track}`, () =>
    helper.whatsPlaying((track) =>
      res.render('play', track)
    )
  );
});

module.exports = router;
