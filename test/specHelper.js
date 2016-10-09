const Zombie = require('zombie');
Zombie.site = 'http://localhost:3000';
const browser = new Zombie();
const MainPage = require('./common/page_objects/main-page');

require('../bin/www'); // This starts the web server, and ensures it is only
                          // started once. It is a misuse of "require", and
                          // should be improved.

module.exports = {
  browser,
  mainPage: new MainPage(browser),
};
