/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('teamsmvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'Teams'
		}).otherwise({
			redirectTo: '/'
		});
	});
