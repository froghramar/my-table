(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
            $stateProvider
              .state('home', {
                  url: "/home",
                  templateUrl: "templates/home.template.html"
              });
        });
})(window.angular);