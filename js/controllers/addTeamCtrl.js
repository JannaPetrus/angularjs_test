(function(){


var mainModule = angular.module('teamsmvc');

var arrayTeams = [];
var arrayWorkers = [];
// var postData = "<RequestInfo> "
//             + "<Event>GetPersons</Event> "         
//         + "</RequestInfo>";

//     var req = new XMLHttpRequest();

//     req.onreadystatechange = function () {
//         if (req.readyState == 4 || req.readyState == "complete") {
//             if (req.status == 200) {
//                 console.log(req.responseText);
//             }
//         }
//     };

//     try {
//         req.open('POST', 'data.json', false);
//         req.send(postData);
//     }
//     catch (e) {
//         console.log(e);
//     }


// mainModule.controller('GetData', function GetData($scope, $http) {
//     $http({
//             url: 'data.json',
//             method: "POST",
//             data: postData,
//             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//         }).success(function (data, status, headers, config) {
//                 $scope.postData = data; // assign  $scope.persons here as promise is resolved here 
//             }).error(function (data, status, config) {
//                 $scope.status = status;
//             });
	
// });

	mainModule.controller('AddTeams', function Teams($scope, $routeParams, $filter, teamsStorage, $rootScope) {
		'use strict';

		arrayTeams = $scope.arrayTeams = teamsStorage.get_team();
			$scope.newTeam = {
				name: '',
				workersInTeam: []
			};

	 // localStorage.clear();

	  	$scope.addTeam = function(){
			arrayTeams[arrayTeams.length] = $scope.newTeam;	
			teamsStorage.put_team(arrayTeams);
		    $scope.newTeam = {
				name: '',
				workersInTeam: []
			};
	    }
	  	$scope.removeTeam = function(index){
		    arrayTeams.splice(index, 1);
		    teamsStorage.put_team(arrayTeams);
	    }

	    $scope.setActiveTeam= function(index){
	    	$rootScope.activeTeam = index;//setActiveTeam
	    	$rootScope.workersInTag = arrayTeams.workersInTeam;
	    	
	    	console.log($rootScope.workersInTag);
	    };

	    $scope.removeWorkerFromTeam= function(index){

	    	arrayTeams[$rootScope.activeTeam].workersInTeam.splice(index, 1);
	    	teamsStorage.put_team(arrayTeams);
	    };

	});


	mainModule.controller('AddWorkers', function Workers($scope, $routeParams, $filter, teamsStorage, $rootScope) {
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

	    $scope.addWorkerToTeam = function(worker){
	     	arrayTeams[$rootScope.activeTeam].workersInTeam.push(worker);
	     	teamsStorage.put_team(arrayTeams);
	    };


	   	$scope.searchWorker = "";
		$scope.workers = arrayWorkers;
		

		$scope.addWorkerToTag = function(worker){
	     	$rootScope.workersInTag.push(worker);
	    };

		$scope.removeWorkerFromTag = function(index){
	     	$rootScope.workersInTag.splice(index,1);
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


