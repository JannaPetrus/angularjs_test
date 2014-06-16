angular.module('teamsmvc')
	.controller('Teams', function Teams($scope, $routeParams, $filter, teamsStorage) {

		'use strict';

	var arrayTeams = $scope.arrayTeams = teamsStorage.get_team();
	$scope.newTeam = '';
	var arrayWorkers = $scope.arrayWorkers = teamsStorage.get_worker();
	$scope.newWorker = {
		name: '',
		jobTitle: '',
		age: '',
		grade: '',
		details: '',
		reviews: ''
	};

  // localStorage.clear();

  	$scope.addTeam = function(){
		var newTeam = $scope.newTeam;
		arrayTeams[arrayTeams.length] = {name: newTeam};	
		teamsStorage.put_team(arrayTeams);
	    newTeam = '';
    }
  	$scope.removeTeam = function(teamName){
	    arrayTeams.splice(arrayTeams.indexOf(teamName), 1);
	    teamsStorage.put_team(arrayTeams);
    }


  	$scope.addWorker = function(){
  		var newWorker = $scope.newWorker;
		arrayWorkers[arrayWorkers.length] = newWorker;	
		teamsStorage.put_worker(arrayWorkers);
	    console.log(newWorker.name);
	    newWorker = {
			name: '',
			jobTitle: '',
			age: '',
			grade: '',
			datails: '',
			reviews: ''
		};
    }
  	$scope.removeWorker = function(workerName){
	    arrayWorkers.splice(arrayTeams.indexOf(workerName), 1);
	    teamsStorage.put_worker(arrayWorkers);
    }

});