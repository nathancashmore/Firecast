const express = require('express');
const convert = require('xml-js');
const request = require('request');

const router = new express.Router();

function buildDirectory(item) {
  return {
    name: item.attributes.title,
    link: `/search?path=${item.attributes.key}`,
  };
}

function buildTrack(item) {
  return {
    name: item.attributes.title,
    link: `/play?track=${item.elements[0].elements[0].attributes.key}`,
  };
}

function buildCatalogue(xmlbody) {
  const mediaContainer = JSON.parse(convert.xml2json(xmlbody));
  return mediaContainer.elements[0].elements.map((item) => {
    if (item.name === 'Directory') {
      return buildDirectory(item);
    }

    if (item.name === 'Track') {
      return buildTrack(item);
    }

    return {};
  }
  );
}

/* GET home page. */
router.get('/', (req, res) => {
  const plexLibraryPath = req.query.path || '/library/sections/2/folder';

  request(`${res.locals.plexServer}${plexLibraryPath}`, (error, response, body) => {
    res.render('search', { menu: buildCatalogue(body) });
  });
});


module.exports = router;
