var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var furiganaSchema = require('../schemas/furiganaSchema');

module.exports = mongoose.model('Furigana', furiganaSchema);