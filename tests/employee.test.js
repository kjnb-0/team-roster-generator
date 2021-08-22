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

    //tests 
    it("can set name, id, email", () => {
        const setExample = new Employee("Martha",40,"example@example.com")
        expect(setExample.name).toBe("Martha")
        expect(setExample.id).toEqual(40)
        expect(setExample.email).toEqual("example@example.com")
        expect(setExample.role).toEqual("Employee")
      });
    it("can get name, id, email, role using getName(), getId(), getEmail(), getRole()", () => {
        const getExample = new Employee("Martha",40,"example@example.com")
        expect(getExample.getName()).toBe("Martha")
        expect(getExample.getId()).toBe(40)
        expect(getExample.getEmail()).toBe("example@example.com")
        expect(getExample.getRole()).toBe("Employee")
    });
  });  
})