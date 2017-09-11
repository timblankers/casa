'use strict';

var sudo = require('sudo');

exports.takePhoto = function(req, res) {
  var child = sudo(['raspistill','-o', '/var/www/html/pics/latest.jpg']);
  child.stdout.on('data', function (data) {
	      console.log(data.toString());
  });
  res.json({ message: 'Smile!' });
};
