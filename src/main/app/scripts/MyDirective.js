///<reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="app.ts" />
var SpaAppModule;
(function (SpaAppModule) {
    var app = SpaAppModule.getModule();
    var MyDirective = (function () {
        function MyDirective($location) {
            this.$location = $location;
            this.restrict = "A";
            this.require = "ngModel";
            this.scope = {
                state: '='
            };
            this.link = function (scope, element, attrs, ngModel) {
                // do stuff here
            };
        }
        return MyDirective;
    })();
    app.directive("myDirective", ["$location", function ($location) { return new MyDirective($location); }]);
})(SpaAppModule || (SpaAppModule = {}));
//# sourceMappingURL=MyDirective.js.map