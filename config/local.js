var mongoose = require('mongoose');

var connectionString  = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://maxkanji:gBWQFO8cKrbb4rTYKVwzxjoNgeSw6oVAWUr_L2.wFo8-@ds027748.mongolab.com:27748/maxkanji'
mongoose.connect(connectionString);

module.exports = { 
  port: process.env.PORT || 1337,
  environment: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  mongoDbConfigurationString: connectionString
};