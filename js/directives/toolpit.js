/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */

angular.module('teamsmvc')
	.directive('tooltip', function () {
		'use strict';

		return function () {
            $("a.showDetails").tooltip();
		}
	});