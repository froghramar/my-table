﻿(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .directive('footer', function () {
            return {
                templateUrl: 'templates/footer.template.html'
            };
        });
})(window.angular);