var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    facebookId: String,
    firstName: String,
    lastName: String
});

module.exports = userSchema;