/* 
 * Copyright (C) MOTHER - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by 
 * John Doe <john.doe@gmail.com>, 04/20/2021
 */

module.exports = {
	get:function(req, res, next){
 		console.log('GET all data');

		 res.json({
			timestamp: Math.floor(Date.now()).toString(),
		   status: "200",
		   message: 'Request processed successfully',
		   path: req.originalUrl,
		   data: {
			   status_description: "Transaction Successful",
			   status_code: "OK.00.00"
		   }
	   });

	},
	getById:function(req, res, next){
 		console.log('GET data by Id');
 		console.log(req.params.id);

 		res.json({
 			timestamp: Math.floor(Date.now()).toString(),
			status: "200",
			message: 'Request processed successfully',
			path: req.originalUrl,
			data: {
				status_description: "Transaction Successful",
				status_code: "OK.00.00"
			}
		});
	},
	save:function(req, res, next){
		console.log('POST a data');
		console.log(req.body);

		res.json({
			timestamp: Math.floor(Date.now()).toString(),
		   status: "200",
		   message: 'Request processed successfully',
		   path: req.originalUrl,
		   data: {
			   status_description: "Transaction Successful",
			   status_code: "OK.00.00"
		   }
	   });
  	},
	update:function(req, res, next){
		console.log('UPDATE data by Id');
		console.log(req.params.id);
		console.log(req.body);
		res.json({
			timestamp: Math.floor(Date.now()).toString(),
		   status: "200",
		   message: 'Request processed successfully',
		   path: req.originalUrl,
		   data: {
			   status_description: "Transaction Successful",
			   status_code: "OK.00.00"
		   }
	   });
  	},
	delete:function(req, res, next){
		console.log('DELETE data by Id');
		console.log(req.params.id);
		res.json({
 			timestamp: Math.floor(Date.now()).toString(),
			status: "200",
			message: 'Request processed successfully',
			path: req.originalUrl,
			data: {
				status_description: "Transaction Successful",
				status_code: "OK.00.00"
			}
		});
  	}
}