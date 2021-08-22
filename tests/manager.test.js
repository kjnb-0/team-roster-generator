const Manager = require('../lib/manager')

//extend employee
//add office number
//override role to manager

describe("Manager", () => {

    describe("initialize", () => {
      it("should create new manager object with valid inputs of name, id, email, office number, role", () => {
        
      const manager = new Manager("ExampleName", 100, "example@example.com", 4);
        
        //make sure new object has correct properties
        expect(manager.name).toEqual("ExampleName")
        expect(manager.id).toEqual(100)
        expect(manager.email).toEqual("example@example.com")
        expect(manager.officeNumber).toEqual(4)
        expect(manager.role).toEqual("Manager")
      });
  
      //tests 
      it("can set name, id, email, office number", () => {
          const setExample = new Manager("Martha",40,"example@example.com",4)
          expect(setExample.name).toBe("Martha")
          expect(setExample.id).toEqual(40)
          expect(setExample.email).toEqual("example@example.com")
          expect(setExample.officeNumber).toEqual(4)
          expect(setExample.role).toEqual("Manager")
        });
      it("can get name, id, email, role using getName(), getId(), getEmail(), getRole()", () => {
          const getExample = new Manager("Martha",40,"example@example.com",4)
          expect(getExample.getName()).toBe("Martha")
          expect(getExample.getId()).toBe(40)
          expect(getExample.getEmail()).toBe("example@example.com")
          expect(getExample.getRole()).toBe("Manager")
      });
    });  
  })