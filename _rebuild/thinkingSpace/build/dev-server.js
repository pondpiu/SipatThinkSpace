var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../config');
var opn = require('opn');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = require('./webpack.dev.conf');

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/infosys';

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();


var compiler = webpack(webpackConfig);

// var devMiddleware = require('webpack-dev-middleware')(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   stats: {
//     colors: true,
//     chunks: false
//   }
// })
//
// var hotMiddleware = require('webpack-hot-middleware')(compiler);
// // force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' });
//     cb()
//   })
// })

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
// app.use(hotMiddleware);


// var compiler = webpack(config);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//BodyParser
// app.use(bodyParser.json);
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))


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
					from : '',
					until : '',
          phone : ''
				};
				schedule.name = req.body.name;
				schedule.from = req.body.from;
				schedule.until = req.body.until;
        schedule.phone = req.body.phone;

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

  app.get('/ibeacon', function (req, res) {
		MongoClient.connect(url, function (err, db) {
			if (err) {
				return res.send({
					'status' : 1,
					'message' : err
				});
			} else {
        var beacon = {
					area : Math.floor((Math.random() * 6) + 1);,
					lat : 13.8040594,
					long : 100.6141653,
          beaconNumber: Math.floor((Math.random() * 80000) + 10000);
				};
        res.send(beacon);
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
            collection.find({'title' : new RegExp(req.params.name, 'i')}).toArray(function (err, doc) {
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
			});
		}
	});
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  var uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');
  opn(uri)
});
