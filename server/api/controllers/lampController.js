'use strict';

var sudo = require('sudo');
var state = 'off';

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

exports.switchAll = function(req, res) {
  if (state == 'off') {
    state = 'on';
  } else {
    state = 'off';
  }
  console.log('state: ' + state);
  var child = sudo(['kaku','A', '1', state]);
  var child = sudo(['kaku','A', '2', state]);
  var child = sudo(['kaku','A', '3', state]);
  child.stdout.on('data', function (data) {
    console.log(data.toString());
  });
  res.json({ message: 'Switched all lamps' });
}
