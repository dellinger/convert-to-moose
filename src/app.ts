/// <reference path="../typings/tsd.d.ts" />

module moose {

    export class Config {
        constructor($routeProvider: angular.route.IRouteProvider) {

            $routeProvider.when('/', {
                controller: 'MooseCtrl',
                templateUrl: 'templates/moose-index.html'
            }).otherwise({
                redirectTo: '/'
            });
        }
    }

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
    export var mooseApp: angular.IModule = angular.module("Moose", []);
    mooseApp.config(Config);

}
