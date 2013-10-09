var homeController = require('./controllers/homeController')

module.exports = function(){

	var run = function(app){
		app.get('/', homeController);
	};

	return {
		run: run
	}	
};