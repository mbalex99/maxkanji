var local = require('../../config/local.js');

var HomeController = {
	index: function(req, res){
        var facebookId = local.facebookId;
		return res.view({
			facebookId: local.facebookId
		});
	}
	
};

module.exports = HomeController;