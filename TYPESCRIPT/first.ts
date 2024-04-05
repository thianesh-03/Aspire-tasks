class Employee{
    constructor(){

    }
    empid: string = "emp1"
    // output: string = this.displayId();
    public displayId():void{
        // return this.empid
        console.log(this.empid)
    }
}
let empDt=new Employee;
empDt.displayId();