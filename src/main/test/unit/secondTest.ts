/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
/// <reference path="../../app/scripts/Person.ts" />

describe("suite", () => {
    it("should be true", () => {
        var person = new Person("Joe");
        expect(person.name).toBe("Joe");
    });
});