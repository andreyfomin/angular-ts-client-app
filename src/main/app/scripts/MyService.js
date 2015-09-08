///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />
var SpaAppModule;
(function (SpaAppModule) {
    "use strict";
    var app = SpaAppModule.getModule();
    var MyService = (function () {
        function MyService($http) {
        }
        MyService.prototype.doSomething = function () {
            var a = "Hi2!";
            console.log(a);
            return a;
        };
        MyService.$inject = ['$http'];
        return MyService;
    })();
    SpaAppModule.MyService = MyService;
    app.service("userServices", MyService);
})(SpaAppModule || (SpaAppModule = {}));
//# sourceMappingURL=MyService.js.map