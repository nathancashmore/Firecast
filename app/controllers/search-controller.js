const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('search');
});

router.post('/', (req, res) => {
  res.render('search', { term: req.body.term });
});

module.exports = router;
