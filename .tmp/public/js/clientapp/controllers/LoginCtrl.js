ClientApp.Controllers.controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.login = function(){
		FB.login(function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', function(response) {
					console.log('Good to see you, ' + response.name + '.');
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});
	};
}]);