(function(){


var mainModule = angular.module('teamsmvc');


	mainModule.controller('Teams', function Teams($scope, $rootScope, Serviceteams) {
		'use strict';

		$scope.activeTeam = Serviceteams.getActiveTeam();
		var arrayTeams = $scope.arrayTeams = Serviceteams.getTeam();
		var newTeam = $scope.newTeam = {
						name: '',
						workersInTeam: []
				};
		$rootScope.refresh = false;
		$rootScope.workersInTag = [];
	  
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
	    	$rootScope.notice = '';
	    	Serviceteams.addTeamToTag(index);
	    	$scope.activeTeam = Serviceteams.getActiveTeam();
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

	    $scope.removeWorkerFromTeam = function(index){
	    	Serviceteams.removeWorkerFromTeam(index);
			$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };		
	});


	mainModule.controller('Workers', function Workers($scope, $rootScope, Serviceteams, WorkersData) {
			'use strict';


		$scope.arrayWorkers;

		    WorkersData.getData()
		    .then(function(dataResponse) {
		       $scope.arrayWorkers = dataResponse.data;
		    });

		$scope.datails = 'this is details';
		$scope.reviews = 'this is reviews';
		
	   	$scope.searchWorker = "";

	    $scope.addWorkerToTeam = function(worker){
	    	$rootScope.notice = Serviceteams.addWorkerToTeam(worker);
	    	$rootScope.workersInTag = Serviceteams.getWorkerInTag();
	    };

		$scope.addWorkerToTag = function(worker){		
			$rootScope.notice = Serviceteams.addWorkerToTag(worker);
			if($rootScope.notice=='')$rootScope.refresh = true;
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


	mainModule.controller('Panel', function() {

	    this.tab = 1;
	    this.selectTab = function(setTab){
	    	this.tab = setTab;
	    };
	    this.isSelected = function(checkTab){
	    	return this.tab === checkTab;
	    };
	});

})();


