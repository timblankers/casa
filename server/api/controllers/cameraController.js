'use strict';

var sudo = require('sudo');

exports.takePhoto = function(req, res) {
  var child = sudo(['bash','api/controllers/takePhoto.sh']);
  child.stdout.on('data', function (data) {
	      console.log(data.toString());
  });
  res.json({ message: 'Smile!' });
};
