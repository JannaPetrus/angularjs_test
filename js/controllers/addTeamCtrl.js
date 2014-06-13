
angular.module('teamsmvc')
	.controller('AddNewTeam', function AddNewTeam($scope, $routeParams, $filter, teamsStorage) {
		'use strict';

	var arrayTeams = $scope.arrayTeams = teamsStorage.get();
	$scope.newTeam = '';

 // localStorage.clear();


  	$scope.addTeam = function(){
		var newTeam = $scope.newTeam;
		
		arrayTeams[arrayTeams.length] = {name: newTeam};
		
		teamsStorage.put(arrayTeams);

  		// for(var teamName in arrayTeams){
	   //  	console.log(teamName.name);
	   //  }

	    $scope.newTeam = '';
    }
});