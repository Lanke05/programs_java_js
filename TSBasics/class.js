"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Students.prototype.GetFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Students;
}());
exports["default"] = Students;
