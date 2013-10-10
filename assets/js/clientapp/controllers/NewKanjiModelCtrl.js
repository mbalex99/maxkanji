'use strict';
ClientApp.Controllers.controller('NewKanjiModelCtrl', ['$scope', '$modalInstance', 'kanjiService', 
	function($scope, $modalInstance, kanjiService){

	$scope.ok = function(character){

		if(!character){
			$scope.errorMessage = "Please enter a character";
		}


		if(character.length != 1){
			$scope.errorMessage = "Kanji can only be one character long!";
		}

		kanjiService.getKanjiByCharacter(character).then(function(){
			$scope.errorMessage = "The Kanji " + character + " already exists";
		}, function(data){
			 $modalInstance.close(character);
		});
	};

	$scope.cancel = function(){
		$modalInstance.dismiss();
	}
}]);