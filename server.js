var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/infosys';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended : true
	}));

app.use(express.static(__dirname + '/'));
app.use('/build', express.static('public'));
// app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});


//post schedule
//post in to collection schedule
app.post('/bookings', function (req, res) {
	//something wrong insert body but still stuck in this if so I comment it out
	// if (!req.body.name) {
	// 	return res.send({
	// 		'status' : '1',
	// 		'message' : 'missing a parameter'
	// 	});
	// } else {
		MongoClient.connect(url, function (err, db) {
			if (err) {
				console.log(err);
				return res.send({
					'status' : '1',
					'message' : err
				});
			} else {
				var collection = db.collection('schedule');
				var schedule = {
					name : '',
					time : '',
					duration : 0
				};
				schedule.name = req.body.name;
				schedule.time = req.body.time;
				schedule.duration = req.body.duration;

				collection.insert(schedule, function (err, doc) {
					if (err) {
						console.log(err);
						return res.send({
							'status' : '1',
							'message' : err
						});
					} else {
						console.log('Inserted ' + req.body.name + '.');
						return res.send({
							'status' : '0',
							'message' : 'schedule created'
						});
					}
					db.close();
				});
			}
		});
	// }
});
//Get bookings
	//from collection schedule
	app.get('/bookings', function (req, res) {
		MongoClient.connect(url, function (err, db) {
			if (err) {
				return res.send({
					'status' : 1,
					'message' : err
				});
			} else {
				var collection = db.collection('schedule');
				collection.find({}).toArray(function(error, documents) {
	    if (err) throw error;

	    res.send(documents);
	});
			}
		});
	});


	//Get news
	//from collection news
	app.get('/news', function (req, res) {
		MongoClient.connect(url, function (err, db) {
			if (err) {
				return res.send({
					'status' : 1,
					'message' : err
				});
			} else {
				var collection = db.collection('news');
				collection.find({}).toArray(function(error, documents) {
	    			if (err) throw error;
	    			res.send(documents);
				});
			}
		});
	});

	//get Zone
	//from collection zone
app.get('/zone/:name?*', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) {
			return res.send({
				'status' : 1,
				'message' : err
			});
		} else {
			var collection = db.collection('zone');

            // if parameter name exist (given)
			if (typeof req.params.name !== 'undefined') {
                collection.findOne({
                    'zoneName': req.params.name
                }, function (err, doc) {
                    if (err) {
                        return res.send({
                            'status': 1,
                            'message': err
                        });
                    } else if (doc != null) {
                        console.log('Found ' + req.params.name + '.');
                        return res.send({
                            'status': 0,
                            'message': 'zone found',
                            'user': doc,

                        });
                    } else {
                        console.log('Can not find ' + req.params.name + '.');
                        return res.send({
                            'status': 2,
                            'message': 'zone not found'
                        });
                    }
                    db.close();
                });
            } else { // else we return all zones
                console.log('returning all zones');
                var collection = db.collection('zone');
                collection.find({}).toArray(function(error, documents) {
                    if (err) throw error;
                    res.send(documents);
                });

            }
		}
	});
});

    //get product
	//from collection product
app.get('/product/:name', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) {
			return res.send({
				'status' : 1,
				'message' : err
			});
		} else {
			var collection = db.collection('product');
			collection.findOne({
				'title' : req.params.name
			}, function (err, doc) {
				if (err) {
					return res.send({
						'status' : 1,
						'message' : err
					});
				} else if (doc != null) {
					console.log('Found ' + req.params.name + '.');
					return res.send({
						'status' : 0,
						'message' : 'product found',
						'user' : doc,

					});
				} else {
					console.log('Can not find ' + req.params.name + '.');
					return res.send({
						'status' : 2,
						'message' : 'product not found'
					});
				}
				db.close();
			});
		}
	});
});




http.listen(3000, function () {
	console.log('listening on 3000');
});
