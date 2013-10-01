var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = require('../schemas/userSchema');

module.exports = mongoose.model('User', userSchema);