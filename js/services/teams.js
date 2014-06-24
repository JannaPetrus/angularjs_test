/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
 var mainModule = angular.module('teamsmvc');


	mainModule.factory('WorkersData', ['$http', '$rootScope', function($http, $rootScope) {
	 
	var workersData = [];
		function getWorkers() {
		    $http({method: 'GET', url: 'data.json'})
		        .success(function(data, status, headers, config) {
		            workersData = data;
		            $rootScope.$broadcast('workersData:updated');
		            console.log(data);
		        })
		        .error(function(data, status, headers, config) {
		            console.log(data);
		        });
		}

		var service = {};
		getWorkers();
		service.getAll = function() {
	        return workersData;
	        console.log(data);
	    }
	 
	    return service;

	}]);

	

	mainModule.service('Serviceteams', ['$http', '$rootScope', 'teamsStorage', function($http, $rootScope, teamsStorage) {

		var arrayTeams = teamsStorage.get_team();
		var arrayWorkers = teamsStorage.get_worker();
		var newTeam = {
						name: '',
						workersInTeam: []
				};
		var activeTeam = arrayTeams.length;
		console.log(activeTeam);
		var workersInTag = [];
		
        return {
        	getTeam:function () {
				return arrayTeams;
            },
        	getWorker:function () {
				return arrayWorkers;
            },
        	getWorkerInTag:function () {
				return workersInTag;
            },
        	addTeam:function (newTeam) {
        		arrayTeams.push(newTeam);
        		teamsStorage.put_team(arrayTeams);
            },
            removeTeam:function (index) {
	            arrayTeams.splice(index, 1);
        		teamsStorage.put_team(arrayTeams);	
			},
            setActiveTeam:function (index) {
            	activeTeam = index;
           	},
            addTeamToTag:function(index){
            	workersInTag = angular.copy(arrayTeams[index].workersInTeam);
            	console.log(workersInTag);
            },
            addWorker:function (newWorker) {
				arrayWorkers.push(newWorker);	
				teamsStorage.put_worker(arrayWorkers);
            },
            removeWorker:function (index) {
		   		arrayWorkers.splice(index, 1);		    
		    	teamsStorage.put_worker(arrayWorkers);
            },
            addWorkerToTeam:function (worker) {
            	console.log(arrayTeams[activeTeam].workersInTeam);
	     		arrayTeams[activeTeam].workersInTeam.push(worker);
	     		teamsStorage.put_team(arrayTeams);
            },
            removeWorkerFromTeam:function(index){
				arrayTeams[activeTeam].workersInTeam.splice(index, 1);
				workersInTag = angular.copy(arrayTeams[activeTeam].workersInTeam);
	    		teamsStorage.put_team(arrayTeams);
            },
            addWorkerToTag:function(worker){
	     		workersInTag.push(angular.copy(worker));
            },
            removeWorkerFromTag:function(index){
	     		workersInTag.splice(index,1);
            },
            refreshTeam:function(workersInTag){
	     		arrayTeams[activeTeam].workersInTeam = angular.copy(workersInTag); 
        		teamsStorage.put_team(arrayTeams);
            	console.log(arrayTeams);
            }
        };
    }]);


    mainModule.factory('teamsStorage', function () {
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