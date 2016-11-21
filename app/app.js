'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.home',
    'myApp.edit',
    'myApp.version'
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
       // $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise("/view1");
        $stateProvider
            .state('/home', {
                url: "",
                templateUrl: "home/home.html",
                controller:"MainController",
                controllerAs: 'mc'
            })
            .state('/home.view1', {
                url: "/view1",
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl',
                controllerAs: 'vc1'
            })
            .state('/home.view1.edit', {
                //url: "/view1/edit/:pockID",
                url: "/edit/:pockID",
                templateUrl: 'edit/edit.html',
                controller: 'EditCtrl',
                controllerAs: 'ec'
            })
            .state('/home.view2', {
                url: "/view2",
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl',
                controllerAs: 'vc2'
            });
    }]);
