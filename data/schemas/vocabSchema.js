/**
 * Created by malexander on 10/1/13.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var vocabSchema = new Schema({
    meaning: String,
    kana: String,
    value: String
});

module.exports = vocabSchema;