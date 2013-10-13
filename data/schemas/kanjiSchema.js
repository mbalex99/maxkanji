var mongoose = require('mongoose');
var random = require('mongoose-random');
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

kanjiSchema.plugin(random());

module.exports = kanjiSchema;