const express = require('express');
const SonosHelper = require('../helper/sonos-helper');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  new SonosHelper().play(`${res.locals.plexServer}${req.query.track}`, () =>
    res.redirect('/status')
  );
});

module.exports = router;
