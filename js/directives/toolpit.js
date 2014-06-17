/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
var main_module = angular.module('teamsmvc');
main_module.directive('tooltip', function () {
		'use strict';

		return function () {
			$("a.showDetails").tooltip();
		}
	});


// main_module.directive('addworkertoteam',  function () {
// 		'use strict';
                     
// 		return{
// 			scope: {},

// 			link: function ($scope, element, attrs) {
// 					var indexWorker = attrs["addworkertoteam"];

// 	            	console.log(indexWorker);
// 				}
// 		}
// 	});