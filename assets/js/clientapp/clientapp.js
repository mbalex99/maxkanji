

var ClientApp = ClientApp || {};


ClientApp.Constants = angular.module('clientApp.constants', []);
ClientApp.Services = angular.module('clientApp.services', []);
ClientApp.Controllers = angular.module('clientApp.controllers', []);
ClientApp.Filters = angular.module('clientApp.filters', []);
ClientApp.Directives = angular.module('clientApp.directives', []);

angular.module('clientApp',
	['clientApp.constants', 'clientApp.services', 'clientApp.controllers', 'clientApp.filters', 'clientApp.directives', 'ngRoute', 'ui.bootstrap'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider
			.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
			.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'})
            .when('/kanji/list', {templateUrl: 'partials/kanji-list.html', controller: 'KanjiListCtrl'})
			.when('/kanji/:id', {templateUrl: 'partials/kanji-details.html', controller: 'KanjiDetailsCtrl'})
			.when('/kanji/new/:character', {templateUrl: 'partials/kanji-details.html', controller: 'KanjiDetailsCtrl'});
	}]);