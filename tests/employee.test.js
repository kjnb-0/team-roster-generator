const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

//test for creating new valid employee object
describe("Employee", () => {

  describe("initialize", () => {
    it("should create new employee object with valid inputs of name, id, email, role", () => {
      
    const employee = new Employee("ExampleName", 100, "example@example.com");
      
      //make sure new object has correct properties
      expect(employee.name).toEqual("ExampleName");
      expect(employee.id).toEqual(100)
      expect(employee.email).toEqual("example@example.com")
      expect(employee.role).toEqual("Employee")
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
      it("should err if 'id' is negative number", () => {
        const cb = () => new Employee("Martha", -1);
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
      it("should err if 'id' is not a number", () => {
        const cb = () => new Employee("Martha","ID Number");
        const err = new Error("Expected parameter 'id' to be a non-negative number");
        expect(cb).toThrowError(err);
      });
      it("should err if 'email' is not a string", () => {
        const cb = () => new Employee("Martha",50,3);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(cb).toThrowError(err);
      });
  });
  });  
