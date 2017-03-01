(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .directive('header', function () {
            return {
                templateUrl: 'templates/header.template.html'
            };
        });
})(window.angular);