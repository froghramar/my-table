(function (angular) {
    'use strict';
    angular
        .module('MainApp')
        .factory('repositoryFactory', factory);
    function factory() {

        var data;
        var columns;

        function updateDataToLocalStorage() {
            localStorage.setItem('data', JSON.stringify(data));
        }

        function updateColumnsToLocalStorage() {
            localStorage.setItem('columns', JSON.stringify(columns));
        }

        function cloneFromLocalStorage() {
            var stringifiedData = localStorage.getItem('data');
            var stringifiedColumns = localStorage.getItem('columns');
            if(stringifiedData === null || stringifiedColumns === null){
                return false;
            }
            else {
                data = JSON.parse(stringifiedData);
                columns = JSON.parse(stringifiedColumns);
                return true;
            }
        }

        function loadDummyData() {
            data = {
                '1': {
                    'ID' : '0601',
                    'User Name': 'bsse0601',
                    'Email' : 'bsse0601@iit.du.ac.bd'
                },
                '2': {
                    'ID': '0602',
                    'User Name': 'bsse0602',
                    'Email': 'bsse0602@iit.du.ac.bd'
                },
                '3': {
                    'ID': '0603',
                    'User Name': 'bsse0603',
                    'Email': 'bsse0603@iit.du.ac.bd'
                }
            }

            columns = ['ID', 'User Name', 'Password'];
        }

        function initialize() {
            var operation = cloneFromLocalStorage();
            if (operation == false) {
                loadDummyData();
                updateDataToLocalStorage();
                updateColumnsToLocalStorage();
            }
        }

        initialize();
        
        return {
            
        }
    }
})(window.angular);