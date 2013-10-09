var app = require('../app');

var HomeController = {
	index: function(req, res){
		var facebookId = process.env.FACEBOOKID || '206314096207870';
        res.render('index.ejs', {facebookId: facebookId});
	}
	
};

module.exports = HomeController;