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

main_module.directive('collapse', function () {
		'use strict';

		return function () {
			// $( document ).ready(function() {
				
			// });
			//$('.panel-group').collapse('hide');
			//$('.panel-collapse').last().collapse('show');
		}
	});
