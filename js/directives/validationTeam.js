/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
var main_module = angular.module('teamsmvc');
main_module.directive('validationTeam', function () {
		// 'use strict';


        return {
            require: 'ngModel',
	        link: function(scope, elm, attrs, ctrl) {
	            ctrl.$parsers.unshift(function(viewValue) {

	                scope.ValidLength = (viewValue && viewValue.length >= 1 ? 'valid' : undefined);
	                scope.LettersAndNumbers = (viewValue && /^[a-zA-Z0-9]+$/.test(viewValue)) ? 'valid' : undefined;

	                if(scope.ValidLength && scope.LettersAndNumbers) {
	                    ctrl.$setValidity('teamNameValid', true);
	                    return viewValue;
	                } else {
	                    ctrl.$setValidity('teamNameValid', false);                    
	                    return undefined;
	                }

	            });
	        }
        };
	});