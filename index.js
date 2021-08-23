const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employeeArray = []

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(async (data) => {
      //destructuring object
      const { name, id, email, role } = data;
      let specificInfo;
      //different questions based on role choice
      if (role === "Engineer") {
        specificInfo = await inquirer.prompt([
          { type: "input", message: "What is your Github?", name: "github" },
        ]);
        let newEmployee = new Engineer(name,id,email,specificInfo.github)
        employeeArray.push(newEmployee);
        console.log(newEmployee)
      } else if (role === "Intern") {
        specificInfo = await inquirer.prompt([
          { type: "input", message: "What is your school?", name: "school" },
        ]);
      } else {
        specificInfo = await inquirer.prompt([
          {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
          },
        ]);
      }
      console.log(specificInfo);
      let {add} = await inquirer.prompt([
        { type: "list", message: "Add other employee?", name: "add", choices:["Yes","No"] },
      ]);
      console.log(add)
      if (add === "Yes") {
          addEmployee()
      } else {
          writeFile()
      }
    })}

    
    function writeFile() {
        console.log(employeeArray)
      let htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
     
    </body>
    </html>`;

      const filename = path.join(__dirname, "dist", "index.html");

      fs.writeFile(filename, htmlContent, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }

addEmployee();

{/* <h1>My name is ${name}</h1>
<h2>My id is ${id}</h2>
<h3>My email is ${email}</h3>
<h4>My Role is ${role}</h4> */}