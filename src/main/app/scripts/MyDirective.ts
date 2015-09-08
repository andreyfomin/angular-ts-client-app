///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />

module SpaAppModule {

    var app = getModule();

    class MyDirective implements ng.IDirective {
        public restrict:string = "A";
        public require:string = "ngModel";
        public scope = {
            state: '='
        };

        constructor(private $location:ng.ILocationService) {
        }

        public link:ng.IDirectiveLinkFn = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes, ngModel:any) => {
            // do stuff here
        }
    }

    app.directive("myDirective", ["$location",
        ($location:ng.ILocationService) => new MyDirective($location)]);
}