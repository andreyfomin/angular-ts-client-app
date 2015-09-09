///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />
module SpaAppModule {

    "use strict";
    var app = getModule();

    export interface IMyService {
        doSomething(): string;
    }

    export class MyService implements IMyService{

        static $inject = ['$http']
        constructor($http) {

        }

        doSomething():string {
            var a = "Hi4!"
            console.log(a);
            return a;

        }
    }

    app.service("userServices", MyService);
}