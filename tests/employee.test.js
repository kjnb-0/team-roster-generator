//The first class is an `Employee` parent class with the following properties and methods:
// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

const { describe } = require("yargs");
const Employee = require("../lib/employee");

//test for creating new valid employee object

describe("Employee", () => {
  describe("getName", () => {
    it("should save employee's name from user input", () => {
      const employee = new Employee("ExampleName");
      //make sure new object has correct properties

      expect(employee.name).toEqual("ExampleName");
    });
    //tests for errors 
    it("should err if left blank", () => {
        const cb = () => new Employee();
        expect(cb).toThrow();
      });
      it("should err if 'name' is not a string", () => {
        const cb = () => new Employee(10);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrowError(err);
      });
  });
  describe("getId", () => {
    //test for creating new valid employee object
    it("should save employee's name from user input", () => {
      const employee = new Employee("ExampleName");
      //make sure new object has correct properties

      expect(employee.name).toEqual("ExampleName");
    });
    //tests for errors 
    it("should err if left blank", () => {
        const cb = () => new Employee();
        expect(cb).toThrow();
      });
      it("should err if 'name' is not a string", () => {
        const cb = () => new Employee(10);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrowError(err);
      });
  });
});  
