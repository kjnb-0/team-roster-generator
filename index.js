const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employeeArray = [];

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
          { type: "input", message: "What is your Github?", name: "specific" },
        ]);

        let newEmployee = new Engineer(name, id, email, specificInfo.specific);
        employeeArray.push(newEmployee);
      } else if (role === "Intern") {
        specificInfo = await inquirer.prompt([
          { type: "input", message: "What is your school?", name: "specific" },
        ]);

        let newEmployee = new Intern(name, id, email, specificInfo.specific);
        employeeArray.push(newEmployee);
      } else {
        specificInfo = await inquirer.prompt([
          {
            type: "input",
            message: "What is your office number?",
            name: "specific",
          },
        ]);

        let newEmployee = new Manager(name, id, email, specificInfo.specific);

        employeeArray.push(newEmployee);
      }

      let { add } = await inquirer.prompt([
        {
          type: "list",
          message: "Add other employee?",
          name: "add",
          choices: ["Yes", "No"],
        },
      ]);
      console.log(add);
      if (add === "Yes") {
        addEmployee();
      } else {
        writeFile();
      }
    })
    .catch(function () {
      console.log("Success!");
    });
}

function writeFile() {

for (i = 0; i < 10; i++) {
    console.log(employeeArray[i]);

    let htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Team Profiles</title>
    </head>
                                    
    <body>
    <div class="row">
    <div class="card justify-content-center align-items-center">
        <div class="card-header">
            <h4>${employeeArray[i].name}</h4>
        </div>
            <h4>${employeeArray[i].role}</h4 >
        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
            <li class="list-group-item">Email: ${employeeArray[i].email}</li>
            <li class="list-group-item"> ${employeeArray[i].specific}</li>
        </ul>
    </div>   
    </div>
    </body>
    </html>`;

    const filename = path.join(__dirname, "dist", "index.html");

    fs.writeFile(filename, htmlContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
}

addEmployee();
