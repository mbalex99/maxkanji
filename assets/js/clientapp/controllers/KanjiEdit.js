'use strict';
ClientApp.Controllers.controller('KanjiEdit', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.kanjiId = $routeParams.kanjiId;
	$scope.character = "私";

}]);