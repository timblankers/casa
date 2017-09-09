var express = require('express'),
	  app = express(),
	  port = process.env.PORT || 3000;

var routes = require('./api/routes/lampRoutes.js');
routes(app);

app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Casa RESTful API server started on: ' + port);
