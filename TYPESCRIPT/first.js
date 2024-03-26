var Employee = /** @class */ (function () {
    function Employee() {
        this.empid = "emp1";
    }
    // output: string = this.displayId();
    Employee.prototype.displayId = function () {
        // return this.empid
        console.log(this.empid);
    };
    return Employee;
}());
var empDt = new Employee;
empDt.displayId();
