var main_module = angular.module('teamsmvc');
main_module.directive('tooltip', function () {
		'use strict';

		return function () {
			$("a.showDetails").tooltip();
		}
	});