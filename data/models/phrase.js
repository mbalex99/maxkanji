var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phraseSchema = require('../schemas/phraseSchema');

module.exports = mongoose.model('Phrase', phraseSchema);