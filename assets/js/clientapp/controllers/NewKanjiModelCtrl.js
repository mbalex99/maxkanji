'use strict';
ClientApp.Controllers.controller('NewKanjiModelCtrl', ['$scope', '$modalInstance', 'kanjiService', function($scope, $modalInstance, kanjiService){
	$scope.ok = function(){
		
	};

	$scope.cancel = function(){
		$modalInstance.dismiss();
	}
}]);