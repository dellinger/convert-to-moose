/// <reference path="../typings/tsd.d.ts" />
var moose;
(function (moose) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/', {
                controller: 'MooseCtrl',
                templateUrl: 'templates/moose-index.html'
            }).otherwise({
                redirectTo: '/'
            });
        }
        return Config;
    })();
    moose.Config = Config;
    Config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
    moose.mooseApp = angular.module("Moose", []);
    moose.mooseApp.config(Config);
})(moose || (moose = {}));
