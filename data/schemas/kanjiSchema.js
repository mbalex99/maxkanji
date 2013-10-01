var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vocabSchema = require('../schemas/vocabSchema');
var phraseSchema = require('../schemas/phraseSchema');

var kanjiSchema = new Schema({
    kanjiId : Schema.ObjectId,
    character: String,
    onYomi: String,
    kunYomi: String,
    meaning: String,
    vocabs: [vocabSchema],
    phrases: [phraseSchema]
});

module.exports = kanjiSchema;