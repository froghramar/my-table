(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/table");
            $stateProvider
              .state('table', {
                  url: "/table",
                  templateUrl: "templates/table.template.html"
              });
        });
})(window.angular);