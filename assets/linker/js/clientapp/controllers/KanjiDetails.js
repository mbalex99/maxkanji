'use strict';
ClientApp.Controllers.controller('KanjiDetailsCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.isEditing  = true;
	$scope.kanjiId = $routeParams.kanjiId;
	$scope.character = "私";

	$scope.vocabs = [{value: 'アメリカ人', kana: 'アメリカじん', meaning: 'American (Person)'}, {value: '中国人', kana: 'ちゅうごくじん', meaning: 'Chinese (Person)'}];

	$scope.saveChanges = function(){

	};

}]);