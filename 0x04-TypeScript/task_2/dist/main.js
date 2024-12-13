"use strict";
// Create a class Director that implements DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to Director tasks";
    };
    return Director;
}());
// Create a class Teacher that implements TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Function to create an employee based on salary
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Test the function
console.log(createEmployee(200).workFromHome()); // Output: "Cannot work from home"
console.log(createEmployee(1000).workFromHome()); // Output: "Working from home"
console.log(createEmployee("$500").workFromHome()); // Output: "Working from home"
