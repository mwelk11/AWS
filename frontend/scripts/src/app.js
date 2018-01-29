/**
 * @ngdoc overview
 * @name awsServerlessApp
 *
 * Main module of the application.
 */
var app = angular.module('awsServerlessApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
});

