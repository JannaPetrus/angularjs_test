(function(){


var mainModule = angular.module('teamsmvc');


	mainModule.controller('AddTeams', function Teams($scope, $routeParams, $filter, $rootScope, Serviceteams) {
		'use strict';

		$scope.activeTeam = Serviceteams.getActiveTeam();
		//setTimeout(function() { $scope.activeTeam = Serviceteams.getActiveTeam() },1000);
		var arrayTeams = $scope.arrayTeams = Serviceteams.getTeam();
		var newTeam = $scope.newTeam = {
						name: '',
						workersInTeam: []
				};
		$rootScope.refresh = false;
		//localStorage.clear();
		$rootScope.workersInTag = Serviceteams.getDefaultWorkerInTag();
	  
	  	$scope.addTeam = function(){
	  		Serviceteams.addTeam($scope.newTeam);
				$scope.newTeam = {
						name: '',
						workersInTeam: []
				};
			$scope.activeTeam = Serviceteams.getActiveTeam();
	    };

	  	$scope.removeTeam = function(index){
		    Serviceteams.removeTeam(index);		
		    $rootScope.workersInTag = Serviceteams.getWorkerInTag();   
	    };

	    $scope.addTeamToTag = function(index){
	    	$rootScope.refresh = false;
	    	$scope.notice = Serviceteams.addTeamToTag(index);
	    	$scope.activeTeam = Serviceteams.getActiveTeam();
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

	    $scope.removeWorkerFromTeam = function(index){
	    	Serviceteams.removeWorkerFromTeam(index);
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };		
	  
	});


	mainModule.controller('AddWorkers', function Workers($scope, $routeParams, $filter, $rootScope, Serviceteams, WorkersData) {
			'use strict';


		$scope.arrayWorkers;

		    WorkersData.getData()
		    .then(function(dataResponse) {
		       $scope.arrayWorkers = dataResponse.data;
		    });

		var newWorker =	$scope.newWorker = {
				id: '',
				name: '',
				job: '',
				age: '',
				grade: ''
		};

		$scope.datails = 'this is details';
		$scope.reviews = 'this is reviews';
		
	   	$scope.searchWorker = "";

	    $scope.addWorkerToTeam = function(worker){
	    	$scope.noticeAddWorkerToTeam = Serviceteams.addWorkerToTeam(worker);
	    	$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

		$scope.addWorkerToTag = function(worker){
			$rootScope.refresh = true;
			$scope.notice = Serviceteams.addWorkerToTag(worker);
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

		$scope.removeWorkerFromTag = function(index){

				$rootScope.refresh = true;

	     	Serviceteams.removeWorkerFromTag(index);
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();

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


