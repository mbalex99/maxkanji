

var HomeController = {
	index: function(req, res){
		console.log('hey');
        res.render('index.ejs');
	}
	
};

module.exports = HomeController;