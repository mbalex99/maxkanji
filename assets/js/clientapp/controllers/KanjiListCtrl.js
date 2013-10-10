'use strict';
ClientApp.Controllers.controller('KanjiListCtrl', ['$http', '$scope', '$modal', '$log', function($http, $scope, $modal, $log){

    $scope.pageNumber = 1;
    $scope.pageSize = 50;
    $scope.searchTerm = null;


    $scope.newKanji = function(){
        var modalInstance = $modal.open({
            templateUrl: 'partials/new-kanji-modal.html',
            controller: 'NewKanjiModelCtrl'
        });
        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
      }, function () {
          $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.fetch = function(){
        $http({
            method: 'GET',
            url: '/api/kanjis/',
            params: {
                pageNumber: $scope.pageNumber,
                pageSize: $scope.pageSize,
                searchTerm: $scope.searchTerm
            }
        }).success(function(data){
            $scope.kanjis = data;
        }).error(function(data){
            alert('Error searching kanji');
        });
    };

    $scope.fetch();
}]);