var express = require('express');
var http = require('http');
var path = require('path');
var routeConfig = require('./configs/routeConfig');
var mongoose = require('mongoose');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('view options', {layout:false});
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/template', express.static(path.join(__dirname, '/template')));
	app.use('/assets', express.static(path.join(__dirname, '/assets')));
	app.use('/partials', express.static(path.join(__dirname, '/partials')));

});

var options = {
	db: {native_parser: true},
	server: {poolSize: 5},
	replset: {rs_name: 'myReplicaSetName'},
};

options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };

var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI || "mongodb://maxkanji:gBWQFO8cKrbb4rTYKVwzxjoNgeSw6oVAWUr_L2.wFo8-@ds027748.mongolab.com:27748/maxkanji";


var connectWithRetry = function() {
	return mongoose.connect(connectionString, options, function(err){
		if(err){
			console.log("Failed to connect to mongo on startup - retrying in 5 seconds " + err);
			setTimeout(connectWithRetry, 5000);
		}
	})
}
connectWithRetry();
//mongoose.connect(connectionString, options);



app.configure('development', function(){ app.use(express.errorHandler()); });

routeConfig.run(app);

app.listen(app.get('port'));

console.log('Started Node Server on ' +  app.get('port'));

module.exports = app;