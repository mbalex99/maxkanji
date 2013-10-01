var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var furiganaSchema = require('../schemas/furiganaSchema');

var phraseSchema = new Schema({
    meaning: String,
    value: String,
    furiganas: [furiganaSchema]
});

module.exports = phraseSchema;