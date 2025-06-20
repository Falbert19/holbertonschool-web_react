/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var student1 = {
    firstName: "Fernando",
    lastName: "Albert",
    age: 23,
    location: "Ponce"
};
var student2 = {
    firstName: "Nayelis",
    lastName: "Alfinez",
    age: 22,
    location: "Villalba"
};
var studentsList = [student1, student2];
// create the table
var table = document.createElement("table");
var thead = document.createElement("thead");
thead.innerHTML = "<tr><th>First Name</th><th>Location</th></tr>";
table.appendChild(thead);
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLElBQU0sUUFBUSxHQUFhO0lBQ3ZCLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE9BQU87Q0FDcEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFhO0lBQ3ZCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXRELG1CQUFtQjtBQUNqQixJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcsK0NBQStDLENBQUM7QUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV6QixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQzNCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsR0FBRyxDQUFDLFNBQVMsR0FBRyxjQUFPLE9BQU8sQ0FBQyxTQUFTLHNCQUFZLE9BQU8sQ0FBQyxRQUFRLFVBQU8sQ0FBQztJQUM1RSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgYSBzaW1wbGUgdGFibGUgdG8gZGlzcGxheSBzdHVkZW50cyBpbmZvXG5pbnRlcmZhY2UgU3R1ZGVudHMge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnRzID0ge1xuICAgIGZpcnN0TmFtZTogXCJGZXJuYW5kb1wiLFxuICAgIGxhc3ROYW1lOiBcIkFsYmVydFwiLFxuICAgIGFnZTogMjMsXG4gICAgbG9jYXRpb246IFwiUG9uY2VcIlxufTtcblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnRzID0ge1xuICAgIGZpcnN0TmFtZTogXCJOYXllbGlzXCIsXG4gICAgbGFzdE5hbWU6IFwiQWxmaW5lelwiLFxuICAgIGFnZTogMjIsXG4gICAgbG9jYXRpb246IFwiVmlsbGFsYmFcIlxufTtcblxuY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50c1tdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIGNyZWF0ZSB0aGUgdGFibGVcbiAgY29uc3QgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICB0aGVhZC5pbm5lckhUTUwgPSBcIjx0cj48dGg+Rmlyc3QgTmFtZTwvdGg+PHRoPkxvY2F0aW9uPC90aD48L3RyPlwiO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XG4gIFxuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgcm93LmlubmVySFRNTCA9IGA8dGQ+JHtzdHVkZW50LmZpcnN0TmFtZX08L3RkPjx0ZD4ke3N0dWRlbnQubG9jYXRpb259PC90ZD5gO1xuICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gIH0pO1xuICBcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==