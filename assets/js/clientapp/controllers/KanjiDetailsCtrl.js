'use strict';
ClientApp.Controllers.controller('KanjiDetailsCtrl', ['$scope', '$routeParams', '$http', '$location', '$q', function($scope, $routeParams, $http, $location, $q){
	$scope.isEditing  = false;
	$scope.kanjiId = $routeParams.kanjiId == "new" ? null : $routeParams.kanjiId;

	$scope.beginEditing = function(){
		$scope.isEditing = true;
	};

	$scope.createNewVocab = function(){

    if(!$scope.vocabs){
      $scope.vocabs = [];
    }

    $scope.vocabs.push({value: "", kana: "", meaning: ""});
  };

  $scope.removeVocab = function(item){

    var index=$scope.vocabs.indexOf(item)
    $scope.vocabs.splice(index,1);
  };

  $scope.createNewPhrase = function(){

    if(!$scope.phrases){
      $scope.phrases = [];
    }
    $scope.phrases.push({value:"", meaning: ""});
  };

  $scope.removePhrase = function(item){
    var index=$scope.phrases.indexOf(item)
    $scope.phrases.splice(index,1);
  };

  $scope.saveChanges = function(){
    var modelToSave = {
     character: $scope.character,
     meaning: $scope.meaning,
     onYomi: $scope.onYomi,
     kunYomi: $scope.kunYomi,
     vocabs: $scope.vocabs,
     phrases: $scope.phrases
   };

   $http.put('/api/kanjis/', modelToSave).success(function(kanji){
    $location.path('/kanji/list');
  }).error(function(data){
    alert('there was an error saving your data');
  });
};

$scope.getLoginStatus = function(){
    FB.getLoginStatus(function(response){

    if(response.status === 'connected'){
      $scope.isCanEdit = true;
      console.log('can edit');
    }else{
      console.log('cannot edit');
      $scope.isCanEdit = false;

    }
  });
};

$scope.fetch = function(){
  $http.get('/api/kanjis/' +  $routeParams.id).success(function(data){
    $scope.character = data.character;
    $scope.meaning = data.character;
    $scope.onYomi = data.onYomi;
    $scope.kunYomi = data.kunYomi;
    $scope.vocabs = data.vocabs;
    $scope.phrases = data.phrases;
  }).error(function(data){
    alert('couldnotfindyourkanji');
  });
};

if($routeParams.id){
  $scope.fetch();
}

if($routeParams.character){
  $scope.character = decodeURIComponent($routeParams.character);
}

$scope.getLoginStatus();

}]);