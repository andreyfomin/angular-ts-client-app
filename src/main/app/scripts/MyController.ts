///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />
/// <reference path="MyService.ts" />

module SpaAppModule {
    "use strict";
    var app = getModule();

    class SpaAppController {
        private isAlive: boolean = false;
        private lastCheck: Date = new Date();
        static $inject: string[] = ['$interval', 'userServices'];

        constructor (
            private $interval: ng.IIntervalService,
            private userServices: IMyService) {

            //this.userServices.doSomething();
            var intervalFn = () => {
                //this.isAlive = result;
                this.lastCheck = new Date();

            };
            $interval(intervalFn, 1000);
            intervalFn();
        }

        doTest1():string {
            return this.userServices.doSomething();
        }
    }

    app.controller("SpaAppController", SpaAppController);
}