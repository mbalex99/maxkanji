var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vocabSchema = require('../schemas/vocabSchema');

module.exports = mongoose.model('Vocab', vocabSchema);