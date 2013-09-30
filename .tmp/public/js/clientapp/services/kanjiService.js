ClientApp.Services.factory('kanjiService', ['$q', '$http', function(){

	var queryKanji = function(params){
		var deferred = $q.defer();

		$http({method: 'GET', url: '/kanjis', params: params}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	};

	var getKanjiById = function(kanjiId){
		var deferred = $q.defer();

		$http({method: 'GET', url: '/kanjis/' + kanjiId}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	};

	var saveKanji = function(kanjiId, payload){
		var deferred = $q.defer();

		$http({method: 'PUT', url: '/kanjis/' + kanjiId, data: payload}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		});

		return deferred.promise;
	}

	var deleteKanji = function(kanjiId){
		var deferred  = $q.defer();

		$http({method: 'DELETE', url: '/kanjis/' + kanjiId}).success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject(data);
		})

		return deferred.promise;
	}

	return {
		queryKanji: queryKanji,
		getKanjiById: getKanjiById,
		saveKanji: saveKanji,
		deleteKanji: deleteKanji
	};
}]);