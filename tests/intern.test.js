const Intern = require('../lib/intern')

//extend employee
//add school
//get role override to intern

describe("Intern", () => {

    describe("initialize", () => {
      it("should create new intern object with valid inputs of name, id, email, school, role", () => {
        
      const intern = new Intern("ExampleName", 100, "example@example.com", "school");
        
        //make sure new object has correct properties
        expect(intern.name).toEqual("ExampleName")
        expect(intern.id).toEqual(100)
        expect(intern.email).toEqual("example@example.com")
        expect(intern.school).toEqual("school")
        expect(intern.role).toEqual("Intern")
      });
  
      //tests 
      it("can set name, id, email, school", () => {
          const setExample = new Intern("Martha",40,"example@example.com","school")
          expect(setExample.name).toBe("Martha")
          expect(setExample.id).toEqual(40)
          expect(setExample.email).toEqual("example@example.com")
          expect(setExample.school).toEqual("school")
          expect(setExample.role).toEqual("Intern")
        });
      it("can get name, id, email, school, role using getName(), getId(), getEmail(), getSchool(), getRole()", () => {
          const getExample = new Intern("Martha",40,"example@example.com","school")
          expect(getExample.getName()).toBe("Martha")
          expect(getExample.getId()).toBe(40)
          expect(getExample.getEmail()).toBe("example@example.com")
          expect(getExample.getSchool()).toBe("school")
          expect(getExample.getRole()).toBe("Intern")
      });
    });  
  })