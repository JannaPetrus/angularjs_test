
 var mainModule = angular.module('teamsmvc');


	mainModule.service('WorkersData', function($http) {
	 delete $http.defaults.headers.common['X-Requested-With'];
		
		this.getData = function getData(){
		    return $http.get('data.json');
		}
	});

	mainModule.service('Serviceteams', ['$rootScope', 'teamsStorage', 'WorkersData', function($rootScope, teamsStorage, WorkersData) {
		
		var arrayWorkers;
		    WorkersData.getData()
		    .then(function(dataResponse) {
		       arrayWorkers = dataResponse.data;
		    });
		var arrayTeams = teamsStorage.get_team();
		var newTeam = {
						name: '',
						workersInTeam: []
				};
		var activeTeam = null;
		var workersInTag = [];
		var notice = '';

        return {
        	getTeam:function () {
				return arrayTeams;
            },
            getActiveTeam:function () {
				return activeTeam;			
            },
        	getWorkerInTag:function () {
				return workersInTag;
            },
        	addTeam:function (newTeam) {
        		arrayTeams.push(newTeam);
        		teamsStorage.put_team(arrayTeams);
            	console.log(activeTeam);
            },
            removeTeam:function (index) {
	            arrayTeams.splice(index, 1);
        		teamsStorage.put_team(arrayTeams);
        		workersInTag = [];
			},
            addTeamToTag:function(index){
            	activeTeam = index;
            	workersInTag = angular.copy(arrayTeams[activeTeam].workersInTeam);
            },
            addWorkerToTeam:function (worker) {
            	var flag = false;
            	if(activeTeam!=null){
	            	for(var i = 0; i < arrayTeams[activeTeam].workersInTeam.length; i++){
	            		if(arrayTeams[activeTeam].workersInTeam[i].id == worker.id){
	            			flag = true;
							notice = 'This worker is already in this team!';
	            			break;
	            		}
	            	}
	            	if(!flag){
	            		arrayTeams[activeTeam].workersInTeam.push(worker);
	            		workersInTag = angular.copy(arrayTeams[activeTeam].workersInTeam);
		     			teamsStorage.put_team(arrayTeams);
		     			notice = '';		
		     		}
	     		}else notice = 'Choose Team';
	     		return notice;
            },
            removeWorkerFromTeam:function(index){
				arrayTeams[activeTeam].workersInTeam.splice(index, 1);
				workersInTag = angular.copy(arrayTeams[activeTeam].workersInTeam);
	    		teamsStorage.put_team(arrayTeams);
            },
            addWorkerToTag:function(worker){
            	var flag = false;
            	if(activeTeam!=null){
	            	for(var i = 0; i < workersInTag.length; i++){
	            		if(workersInTag[i].id == worker.id){
	            			flag = true;
	            			notice = 'This worker is already in this team!';
	            			break;
	            		}
	            	}
	            	if(!flag){
	            		workersInTag.push(angular.copy(worker));
	            		notice = '';
	            		refresh = true;//need refresh of the team
	            	}
	            }else notice = 'Choose Team';
	            console.log(workersInTag);
	     		return notice;
            },
            removeWorkerFromTag:function(index){
	     		workersInTag.splice(index,1);
            },
            refreshTeam:function(workersInTag){
	     		arrayTeams[activeTeam].workersInTeam = angular.copy(workersInTag); 
        		teamsStorage.put_team(arrayTeams);
            }
        };
    }]);


    mainModule.factory('teamsStorage', function () {
		'use strict';

		var TEAMS_STORAGE_ID = 'teams-angularjs';

		return {
			get_team: function () {
				return JSON.parse(localStorage.getItem(TEAMS_STORAGE_ID) || '[]');
			},
			put_team: function (teams) {
				localStorage.setItem(TEAMS_STORAGE_ID, JSON.stringify(teams));
			}
		};
	});