angular.module('teamsmvc')
	.controller('Teams', function Teams($scope, $routeParams, $filter, teamsStorage) {

		'use strict';

	var arrayTeams = $scope.arrayTeams = teamsStorage.get_team();
	$scope.newTeam = {
		name: '',
		workers: []
	};
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
		arrayTeams[arrayTeams.length] = {name: $scope.newTeam};	
		teamsStorage.put_team(arrayTeams);
	    $scope.newTeam = '';
    }
  	$scope.removeTeam = function(index){
	    arrayTeams.splice(index, 1);
	    teamsStorage.put_team(arrayTeams);
    }


  	$scope.addWorker = function(){
		arrayWorkers[arrayWorkers.length] = $scope.newWorker;	
		teamsStorage.put_worker(arrayWorkers);
	    $scope.newWorker = {
			name: '',
			jobTitle: '',
			age: '',
			grade: '',
			datails: '',
			reviews: ''
		};
    }
  	$scope.removeWorker = function(index){
	    arrayWorkers.splice(index, 1);
	    teamsStorage.put_worker(arrayWorkers);
    }

    // $scope.addWorkerToTeam = function(index){
		
		
    // }

});