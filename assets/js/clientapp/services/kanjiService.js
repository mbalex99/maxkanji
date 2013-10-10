ClientApp.Services.factory('kanjiService', ['$q', '$http', function($q, $http){

	var queryKanji = function(params){
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/kanjis', params: params}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	};

	var getKanjiById = function(kanjiId){
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/kanjis/' + kanjiId}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	};


	var getKanjiByCharacter = function(character){
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/kanjis/character/' + character}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	}

	var saveKanji = function(kanjiId, payload){
		var deferred = $q.defer();
		$http({method: 'PUT', url: '/api/kanjis/' + kanjiId, data: payload}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});
		return deferred.promise;
	}

	var deleteKanji = function(kanjiId){
		var deferred  = $q.defer();

		$http({method: 'DELETE', url: '/api/kanjis/' + kanjiId}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		})

		return deferred.promise;
	}

	return {
		queryKanji: queryKanji,
		getKanjiById: getKanjiById,
		getKanjiByCharacter: getKanjiByCharacter,
		saveKanji: saveKanji,
		deleteKanji: deleteKanji
	};
}]);