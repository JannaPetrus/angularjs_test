
angular.module('teamsmvc')
	.controller('Teams', function Teams($scope, $routeParams, $filter, teamsStorage) {
		'use strict';

	var arrayTeams = $scope.arrayTeams = teamsStorage.get();
	$scope.newTeam = '';
	var arrayWorkers = $scope.arrayWorkers = teamsStorage.get();
	$scope.newWorker = {
		name: 'gnjhb',
		jobTitle: '',
		age: '',
		grade: ''
	};

 // localStorage.clear();

  	$scope.addTeam = function(){
		var newTeam = $scope.newTeam;
		arrayTeams[arrayTeams.length] = {name: newTeam};	
		teamsStorage.put(arrayTeams);
	    newTeam = '';
    }

  	$scope.removeTeam = function(teamName){
	    arrayTeams.splice(arrayTeams.indexOf(teamName), 1);
	    teamsStorage.put(arrayTeams);
    }


  	$scope.addWorker = function(){
  		var newWorker = $scope.newWorker;
		arrayWorkers[arrayWorkers.length] = newWorker;	
		teamsStorage.put(arrayWorkers);
	    console.log(newWorker.name);
	    newWorker = {
			name: '',
			jobTitle: '',
			age: '',
			grade: ''
		};
    }
});