const express = require('express');
const SonosHelper = require('../helper/sonos-helper');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  new SonosHelper().whatsPlaying((track) =>
    res.render('status', track)
  );
});

module.exports = router;
