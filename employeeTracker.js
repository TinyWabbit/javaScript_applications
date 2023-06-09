//Employee Tracker App - Includes examples of classes, variables, arrays, iteration, functions and function calling.
class Employees {
    constructor (firstname, lastname, yearsnumber) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearsnumber = yearsnumber;
    }
}
const Employee1 = new Employees("George", "Mason", 7);
const Employee2 = new Employees("Humphrey", "Taylor", 3);
const employeeArray = [Employee1, Employee2];

Employees.prototype.returnCredentials = function() {
    return this.firstname + " " + this.lastname + " has worked here for " + this.yearsnumber + " years ";
}
employeeArray.forEach((Employee) => {
   console.log(Employee.returnCredentials());
});