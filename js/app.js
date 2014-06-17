/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var mainModule = angular.module('teamsmvc', ['ngRoute']);

mainModule.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'Teams'
		}).otherwise({
			redirectTo: '/'
		});
	});

mainModule.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'Workers'
		}).otherwise({
			redirectTo: '/'
		});
	});