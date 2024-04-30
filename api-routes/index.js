/* 
 * Copyright (C) MOTHER - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by 
 * Mac Neil Ivan Tumacay <tumacayivan@gmail.com>, 04/08/2024
 */

module.exports = function(app) {

	let cors = require('cors')
	app.use(cors({
    	origin: ['*']
	}));
	
	let bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	// let cors = require('cors')
	// app.use(cors()) // Use this after the variable declaration

	let expressJwt = require('express-jwt');
	// app.use('/api/session', expressJwt({secret: defaults.getConfig().test.app.jwt.key}));
	// app.use('/api/test/update', expressJwt({secret: defaults.getConfig().test.app.jwt.key}));


  	app.use('/api', require('./test.js'));

  	// const swaggerUi = require('swagger-ui-express');
	// const swaggerDocument = require('../swagger.json');
	// app.use('/api-docs', function(req, res, next){
	//     swaggerDocument.host = req.get('host');
	//     req.swaggerDoc = swaggerDocument;
	//     next();
	// }, swaggerUi.serve, swaggerUi.setup());

  	app.use(function(err, req, res, next){
	  if (err.constructor.name === 'UnauthorizedError') {
	    res.status(401).send('Unauthorized');
	  }
	});

	app.get('*', (req, res) => {
	  res.redirect('/web-app/login.html')
	});
}