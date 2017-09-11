var express = require('express'),
	  app = express(),
	  port = process.env.PORT || 3000;

var lampRoutes = require('./api/routes/lampRoutes.js');
lampRoutes(app);
var cameraRoutes = require('./api/routes/cameraRoutes.js');
cameraRoutes(app)

app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Casa RESTful API server started on: ' + port);
