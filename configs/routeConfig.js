var homeController = require('../controllers/homeController');
var kanjisController = require('../controllers/kanjisController');
var claimsController = require('../controllers/claimsController');


module.exports = {
	run: function(app){
		app.get('/', homeController.index);
		app.get('/api/kanjis', kanjisController.queryKanjis);
		app.get('/api/kanjis/:id', kanjisController.getKanjiById);
		app.get('/api/randomkanji', kanjisController.getRandomKanji);
		app.get('/api/kanjis/character/:character', kanjisController.getKanjiByCharacter);
		app.put('/api/kanjis', kanjisController.saveKanji);
		app.get('/api/claims/', claimsController.getClaims);
	}
};