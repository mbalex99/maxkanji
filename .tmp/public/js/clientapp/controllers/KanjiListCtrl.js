'use strict';
ClientApp.Controllers.controller('KanjiListCtrl', ['$http', '$scope', function($http, $scope){

    $scope.pageNumber = 1;
    $scope.pageSize = 50;
    $scope.searchTerm = null;

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