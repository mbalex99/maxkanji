var mongoose = require('mongoose');
var _ = require('lodash');

var Kanji = require('../../data/models/kanji');
var Phrase = require('../../data/models/phrase');
var Vocab = require('../../data/models/vocab');
var Furigana = require('../../data/models/furigana');



var KanjisController = {

    queryKanjis: function(req,res){

        var pageNumber = req.query.pageNumber || 1;
        var pageSize = req.query.pageSize || 50;

        Kanji.find({}, function(err, docs){
            res.send(docs);
        });
	},
    getKanjiById: function(req, res){
        var id = mongoose.Types.ObjectId( req.param('id'));

        Kanji.findById(id, function(err, doc){
            if(err){
                res.send(500);
            }

            if(doc){
                res.send(doc);
            }else{
                res.send(404);
            }
        });

	},
    saveKanji: function(req, res){

        var vocabs = _.map(req.body.vocabs, function(vocab){
            return new Vocab({
                meaning: vocab.meaning,
                kana: vocab.kana,
                value: vocab.value
            });
        });

        var phrases = _.map(req.body.phrases, function(phrase){

            var furiganas = _.map(phrase.furiganas, function(furigana){
               return new Furigana({
                   start: furigana.start,
                   end: furigana.end,
                   value: furigana.value
               });
            });

            return new Phrase({
                meaning: phrase.meaning,
                value: phrase.value,
                furiganas: furiganas
            });
        });

        Kanji.update({character: req.body.character}, {$set: {
            character: req.body.character,
            onYomi: req.body.onYomi,
            kunYomi: req.body.kunYomi,
            meaning: req.body.meaning,
            vocabs: vocabs,
            phrases: phrases
        }}, {upsert: true}, function(err, doc){
            if(err){
                res.send(err)
            }else
            {
                Kanji.findOne({character: req.body.character}, function(err, doc){
                    res.send(doc);
                });
            }
        });
    },
    deleteKanji: function(req, res){

	} 

};

module.exports = KanjisController;