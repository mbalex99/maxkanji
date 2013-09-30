'use strict';
ClientApp.Controllers.controller('KanjiDetailsCtrl', ['$scope', '$routeParams', 'kanjiService', function($scope, $routeParams, kanjiService){
	$scope.isEditing  = false;
	$scope.kanjiId = $routeParams.kanjiId;
	$scope.character = "私";

	$scope.vocabs = [{value: 'アメリカ人', kana: 'アメリカじん', meaning: 'American (Person)'}, {value: '中国人', kana: 'ちゅうごくじん', meaning: 'Chinese (Person)'}];
	$scope.phrases = [
		{
			value: 'メアリさんはアメリカ人ですか',
			meaning: 'Is Mary American?',
			furiganas: [{start: 10, end: null, value: 'じん'}]
		}
	];

	$scope.beginEditing = function(){
		$scope.isEditing = true;
	};


	$scope.createNewVocab = function(){
		$scope.vocabs.push({value: "", kana: "", meaning: ""});
	};

	$scope.removeVocab = function(item){
		var index=$scope.vocabs.indexOf(item)
  		$scope.vocabs.splice(index,1); 
	};

	$scope.createNewPhrase = function(){
		$scope.phrases.push({value:"", meaning: ""});
	};

	$scope.removePhrase = function(item){
		var index=$scope.phrases.indexOf(item)
  		$scope.phrases.splice(index,1); 
	};

	$scope.saveChanges = function(){

	};

}]);