(function(){

var mainModule = angular.module('teamsmvc');

var arrayTeams = [];
var arrayWorkers = [];		


	mainModule.controller('AddTeams', function Teams($scope, $routeParams, $filter, teamsStorage) {
		'use strict';

		arrayTeams = $scope.arrayTeams = teamsStorage.get_team();
			$scope.newTeam = {
				name: '',
				workers: []
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

	});


	mainModule.controller('AddWorkers', function Workers($scope, $routeParams, $filter, teamsStorage) {
			'use strict';
		arrayWorkers = $scope.arrayWorkers = teamsStorage.get_worker();
			$scope.newWorker = {
				name: '',
				jobTitle: '',
				age: '',
				grade: '',
				details: '',
				reviews: ''
		};
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
	});

})();