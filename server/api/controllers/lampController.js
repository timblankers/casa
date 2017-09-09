'use strict';

var sudo = require('sudo');

exports.turnOff = function(req, res) {
  var child = sudo(['kaku','A', req.params.lampId, 'off']);
  child.stdout.on('data', function (data) {
	      console.log(data.toString());
  });
  res.json({ message: 'Turning off lamp' });
};


exports.turnOn = function(req, res) {
  var child = sudo(['kaku','A', req.params.lampId, 'on']);
  child.stdout.on('data', function (data) {
	      console.log(data.toString());
  });
  res.json({ message: 'Turning on lamp' });
};
