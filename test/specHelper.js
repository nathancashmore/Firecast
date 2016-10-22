const Zombie = require('zombie');
Zombie.site = 'http://localhost:3000';
const browser = new Zombie();
const SearchPage = require('./common/page_objects/search-page');
const StatusPage = require('./common/page_objects/status-page');
const PlayPage = require('./common/page_objects/play-page');

require('../bin/www'); // This starts the web server, and ensures it is only
                          // started once. It is a misuse of "require", and
                          // should be improved.

module.exports = {
  browser,
  searchPage: new SearchPage(browser),
  statusPage: new StatusPage(browser),
  playPage: new PlayPage(browser),
};
