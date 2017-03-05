(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/table");
            $stateProvider
                .state('table', {
                    url: "/table",
                    templateUrl: "templates/table.template.html",
                    controller: 'tableController',
                    controllerAs : 'vm'
                })
                .state('customize', {
                    url: "/customize",
                    templateUrl: "templates/customize.template.html",
                    controller: 'customizeController',
                    controllerAs: 'vm'
                });
                
        });
})(window.angular);