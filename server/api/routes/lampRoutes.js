'use strict';
module.exports = function(app) {
  var lamps = require('../controllers/lampController');

  app.route('/turnOff/:lampId')
    .get(lamps.turnOff)
    .post(lamps.turnOff)

  app.route('/turnOn/:lampId')
    .get(lamps.turnOn)
    .post(lamps.turnOn)

  app.route('/switchAll')
    .get(lamps.switchAll)
    .post(lamps.switchAll)
};
