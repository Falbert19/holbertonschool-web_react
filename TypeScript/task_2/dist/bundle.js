/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

//Director class
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
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home ";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee Function
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// isDirector function
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
//executeWork function
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
//teachClass  function
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director
console.log(executeWork(createEmployee(200))); // getting to work
console.log(executeWork(createEmployee(1000))); // getting to director tasks
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGdCQUFnQjtBQUNoQjtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0I7SUFDbkMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sMkJBQTJCO0lBQ3RDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVELGdCQUFnQjtBQUNoQjtJQUFBO0lBWUEsQ0FBQztJQVhHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUI7SUFDaEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCO0lBQzVCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUMzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzVDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN4QjtTQUFNO1FBQ0gsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUVELHNCQUFzQjtBQUN0QixTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ2xFLENBQUM7QUFFRCxzQkFBc0I7QUFDdEIsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDN0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN2QztJQUNELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUtELHNCQUFzQjtBQUN0QixTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUNwQyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDdkIsT0FBTyxlQUFlLENBQUM7S0FDMUI7U0FBTTtRQUNILE9BQU8sa0JBQWtCLENBQUM7S0FDN0I7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFLLFVBQVU7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFJLFdBQVc7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLFdBQVc7QUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCO0FBRTVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0RpcmVjdG9yIGludGVyZmFjZVxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmdcbn1cblxuLy8gVGVhY2hlciBpbnRlcmZhY2VcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy9EaXJlY3RvciBjbGFzc1xuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiXG4gICAgfVxuICAgIFxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIlxuICAgIH1cbn1cblxuLy8gVGVhY2hlciBjbGFzc1xuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWUgXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiXG4gICAgfVxuXG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIlxuICAgIH1cbn1cblxuLy8gY3JlYXRlRW1wbG95ZWUgRnVuY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgICB9XG59XG5cbi8vIGlzRGlyZWN0b3IgZnVuY3Rpb25cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xufVxuXG4vL2V4ZWN1dGVXb3JrIGZ1bmN0aW9uXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7ICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xufVxuXG4vL2RlZmluZSBzdGluZyBsaXRlcmFsIHR5cGVcbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5cbi8vdGVhY2hDbGFzcyAgZnVuY3Rpb25cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICAgIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcbiAgICAgICAgcmV0dXJuICdUZWFjaGluZyBNYXRoJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAgICAvLyBUZWFjaGVyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7ICAgIC8vIERpcmVjdG9yXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsgIC8vIERpcmVjdG9yXG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpKTsgLy8gZ2V0dGluZyB0byB3b3JrXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpOyAvLyBnZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG5cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7IC8vIFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIFRlYWNoaW5nIEhpc3RvcnkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=