'use strict';

angular.module('tugas_angular')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            })
            .when('/new', {
                templateUrl: 'templates/new.html',
                controller: 'NewController'
            })
            .when('/view/:id', {
                templateUrl: 'templates/view.html',
                controller: 'ViewController'
            })
            .when('/edit/:id', {
                templateUrl: 'templates/edit.html',
                controller: 'EditController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);