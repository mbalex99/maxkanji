var homeController = require('../controllers/homeController');
var kanjisController = require('../controllers/kanjisController');


module.exports = {
	run: function(app){
		app.get('/', homeController.index);
		app.get('/api/kanjis', kanjisController.queryKanjis);
		app.get('/api/kanjis/:id', kanjisController.getKanjiById);
		app.put('/api/kanjis/', kanjisController.saveKanji);
	}
};