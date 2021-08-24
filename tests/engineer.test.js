const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer')

//extend employee
//add github
//change role to Engineer

describe("Engineer", () => {

    describe("initialize", () => {
      it("should create new engineer object with valid inputs of name, id, email, github, role", () => {
        
      const engineer = new Engineer("ExampleName", 100, "example@example.com", "githubName");
        
        //make sure new object has correct properties
        expect(engineer.name).toEqual("ExampleName")
        expect(engineer.id).toEqual(100)
        expect(engineer.email).toEqual("example@example.com")
        expect(engineer.specific).toEqual("githubName")
        expect(engineer.role).toEqual("Engineer")
      });
  
      //tests 
      it("can set name, id, email, github", () => {
          const setExample = new Engineer("Martha",40,"example@example.com","githubName")
          expect(setExample.name).toBe("Martha")
          expect(setExample.id).toEqual(40)
          expect(setExample.email).toEqual("example@example.com")
          expect(setExample.specific).toEqual("githubName")
          expect(setExample.role).toEqual("Engineer")
        });
      it("can get name, id, email, github, role using getName(), getId(), getEmail(), getGithub(), getRole()", () => {
          const getExample = new Engineer("Martha",40,"example@example.com","githubName")
          expect(getExample.getName()).toBe("Martha")
          expect(getExample.getId()).toBe(40)
          expect(getExample.getEmail()).toBe("example@example.com")
          expect(getExample.getGithub()).toBe("githubName")
          expect(getExample.getRole()).toBe("Engineer")
      });
    });  
  })