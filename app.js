const inquirer = require("inquirer");
const fs = require("fs");

//I want to generate a webpage that displays my team's basic info
const managerQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the employee you want to add",
    },
    {
      type: "input",
      name: "ID",
      message: "Please enter the ID of the employee",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the email of the employee",
    },
    {
      type: "list",
      name: "role",
      message: ["manager", "engineer", "intern"],
    },

])
    .then((data) => {
        if (data.role == "manager") {
                inquirer.prompt({
                    type: "input",
                    name: "office",
                    message: "What is the office number for the manager?",
                })
        }
        if (data.role == "engineer"){
                inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "What is the GitHub profile name for the engineer?",
                })

        }
        if (data.role == "intern"){
            inquirer.prompt({
                type: "input",
                name: "school",
                message: "Which school does the intern attend?"
            })

        }


