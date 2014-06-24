(function(){


var mainModule = angular.module('teamsmvc');


	mainModule.controller('WorkersData', ['$http', function($http) {
	 
		    $http.get('data.json')
		        .success(function(data) {
		           console.log("succes");
		        })
		        .error(function(data) {
		            console.log("error");
		        });
		
 // console.log(workersData);
		

	}]);






	mainModule.controller('AddTeams', function Teams($scope, $routeParams, $filter, $rootScope, Serviceteams) {
		'use strict';

		var arrayTeams = $scope.arrayTeams = Serviceteams.getTeam();
		var newTeam = $scope.newTeam = {
						name: '',
						workersInTeam: []
				};
		$rootScope.refresh = false;
	// localStorage.clear();

	  
	  	$scope.addTeam = function(){
	  		Serviceteams.addTeam($scope.newTeam);
	  		
				$scope.newTeam = {
						name: '',
						workersInTeam: []
				};
	    };

	  	$scope.removeTeam = function(index){
		    Serviceteams.removeTeam(index);
		    
	    };

	    $scope.setActiveTeam= function(index){

	    	$rootScope.refresh = false;
	    	Serviceteams.setActiveTeam(index);
	    	Serviceteams.addTeamToTag(index);

			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

	    $scope.removeWorkerFromTeam = function(index){
	    	Serviceteams.removeWorkerFromTeam(index);

			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

	    
		
	  
	});


	mainModule.controller('AddWorkers', function Workers($scope, $routeParams, $filter, $rootScope, Serviceteams) {
			'use strict';

		var arrayWorkers = $scope.arrayWorkers = Serviceteams.getWorker();
		var newWorker =	$scope.newWorker = {
				name: '',
				job: '',
				age: '',
				grade: ''
		};
// var newWorker =	$scope.newWorker = {
// 				name: '',
// 				job: '',
// 				age: '',
// 				grade: '',
// 				details: '',
// 				reviews: ''
// 		};
		
	   	$scope.searchWorker = "";

		// var workersInTag = $scope.workersInTag = Serviceteams.getTeam();


		$scope.addWorker = function(){
			Serviceteams.addWorker($scope.newWorker);
		    $scope.newWorker = {
		    	name: '',
				job: '',
				age: '',
				grade: ''
			};
	    };
	  	$scope.removeWorker = function(index, worker){
	  		Serviceteams.removeWorker(index, worker);
	  		$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

	    $scope.addWorkerToTeam = function(worker){
	    	Serviceteams.addWorkerToTeam(worker);
	    };

		$scope.addWorkerToTag = function(worker){
			$rootScope.refresh = true;
			Serviceteams.addWorkerToTag(worker);
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

		$scope.removeWorkerFromTag = function(index){
			$rootScope.refresh = true;
	     	Serviceteams.removeWorkerFromTag(index);
	    };

		$scope.refreshTeam = function(){
	    	Serviceteams.refreshTeam($rootScope.workersInTag);
	    };
	});







	mainModule.controller('PanelController', function() {

	    this.tab = 1;
	    this.selectTab = function(setTab){
	    	this.tab = setTab;
	    };
	    this.isSelected = function(checkTab){
	    	return this.tab === checkTab;
	    };
	});

})();


