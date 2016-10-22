const express = require('express');
const convert = require('xml-js');
const request = require('request');

const router = new express.Router();

function itemIfPresent(item, previousPath) {
  if (item.attributes) {
    return {
      name: item.attributes.title,
      link: `/search?path=${previousPath}/${item.attributes.key}`,
    };
  }

  return { name: 'Not Found' };
}

function buildFileStructure(xmlbody, previousPath) {
  const directory = JSON.parse(convert.xml2json(xmlbody));
  const menu = [];

  directory.elements.forEach((container) => {
    container.elements.forEach((item) => {
      menu.push(itemIfPresent(item, previousPath));
    });
  });

  return menu;
}

/* GET home page. */
router.get('/', (req, res) => {
  const plexLibraryPath = req.query.path || '/library';

  request(`${res.locals.plexServer}${plexLibraryPath}`, (error, response, body) => {
    res.render('search', { menu: buildFileStructure(body, plexLibraryPath) });
  });
});


module.exports = router;
