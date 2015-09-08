///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />
/// <reference path="MyService.ts" />
var SpaAppModule;
(function (SpaAppModule) {
    "use strict";
    var app = SpaAppModule.getModule();
    var SpaAppController = (function () {
        function SpaAppController($interval, userServices) {
            var _this = this;
            this.$interval = $interval;
            this.userServices = userServices;
            this.isAlive = false;
            this.lastCheck = new Date();
            //this.userServices.doSomething();
            var intervalFn = function () {
                //this.isAlive = result;
                _this.lastCheck = new Date();
            };
            $interval(intervalFn, 1000);
            intervalFn();
        }
        SpaAppController.prototype.doTest1 = function () {
            return this.userServices.doSomething();
        };
        SpaAppController.$inject = ['$interval', 'userServices'];
        return SpaAppController;
    })();
    app.controller("SpaAppController", SpaAppController);
})(SpaAppModule || (SpaAppModule = {}));
//# sourceMappingURL=MyController.js.map