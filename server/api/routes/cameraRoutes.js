'use strict';
module.exports = function(app) {
  var camera = require('../controllers/cameraController');

  app.route('/takePhoto')
    .get(camera.takePhoto)
    .post(camera.takePhoto)

};
