///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
//http://www.dotnetcurry.com/angularjs/1016/angularjs-typescript-single-page-apps-spa
var SpaAppModule;
(function (SpaAppModule) {
    "use strict";
    angular.module("spaModule", []);
    SpaAppModule.getModule = function () {
        return angular.module("spaModule");
    };
})(SpaAppModule || (SpaAppModule = {}));
//# sourceMappingURL=app.js.map