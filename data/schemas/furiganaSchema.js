var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var furiganaSchema = new Schema({
    start: Number,
    end: Number,
    value: String
});

module.exports = furiganaSchema;