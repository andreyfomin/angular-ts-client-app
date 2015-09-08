///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
//http://www.dotnetcurry.com/angularjs/1016/angularjs-typescript-single-page-apps-spa

module SpaAppModule {
    "use strict";
    angular.module("spaModule", []);

    export var getModule: () => ng.IModule = () => {
            return angular.module("spaModule");
    }
}