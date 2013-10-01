var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kanjiSchema = require('../schemas/kanjiSchema');

module.exports = mongoose.model('Kanji', kanjiSchema);