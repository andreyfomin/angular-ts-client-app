/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
/// <reference path="../../app/scripts/Person.ts" />
describe("suite", function () {
    it("should be true", function () {
        var person = new Person("Joe");
        expect(person.name).toBe("Joe");
    });
});
//# sourceMappingURL=secondTest.js.map