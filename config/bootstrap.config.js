(function (angular) {
    'use strict';
    window.onload = function () {
        angular.bootstrap(document.getElementsByTagName('main')[0], ['MainApp']);
    }
})(window.angular);