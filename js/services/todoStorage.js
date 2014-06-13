/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('teamsmvc')
	.factory('teamsStorage', function () {
		'use strict';

		var STORAGE_ID = 'teams-angularjs';

		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (teams) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(teams));
			}
		};
	});
