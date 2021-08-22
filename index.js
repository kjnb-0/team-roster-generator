const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

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
      choices: ["Engineer","Intern","Manager","Employee"]
    },
  ])
  .then((data) => {
    const { name, id, email, role } = data;

    let htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
      html {
          color: indigo;
      }
      </style>
    </head>
    <body>
      <h1>My name is ${name}</h1>
      <h2>My id is ${id}</h2>
      <h3>My email is ${email}</h3>
      <h4>My Role is ${role}</h4>
    </body>
    </html>`;

    const filename = path.join(__dirname, "html_output", "index.html");

    fs.writeFile(filename, htmlContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
