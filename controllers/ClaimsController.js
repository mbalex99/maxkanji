var http = require('http');

var ClaimsController = {
    getClaims: function(req, res){
    	var accessToken = req.query.facebookAccessToken;

    	http.request('https://graph.facebook.com/me?accessToken='+accessToken, function(response){
    		response.on('data', function(chunk){
    			res.send(chunk);
    		});
    	});


    }
};

module.exports = ClaimsController;