/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('teamsmvc')
	.factory('teamsStorage', function () {
		'use strict';

		var TEAMS_STORAGE_ID = 'teams-angularjs';
		var WORKERS_STORAGE_ID = 'workers-angularjs';


		return {
			get_team: function () {
				return JSON.parse(localStorage.getItem(TEAMS_STORAGE_ID) || '[]');
			},

			put_team: function (teams) {
				localStorage.setItem(TEAMS_STORAGE_ID, JSON.stringify(teams));
			},
			get_worker: function () {
				return JSON.parse(localStorage.getItem(WORKERS_STORAGE_ID) || '[]');
			},

			put_worker: function (workers) {
				localStorage.setItem(WORKERS_STORAGE_ID, JSON.stringify(workers));
			}
		};
	});