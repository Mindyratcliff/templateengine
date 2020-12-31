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
    //Provide the user with the option to select which kind of employee to add.
    {
      type: "list",
      name: "role",
      message: ["manager", "engineer", "intern"],
    },

])
//then ask questions based on the role of the employee
    .then((data) => {
        if (data.role == "manager") {
                inquirer.prompt({
                    type: "input",
                    name: "office",
                    message: "What is the office number for the manager?",
                }).then((managerData)) => {
                    
                }
        }
        if (data.role == "engineer"){
                inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "What is the GitHub profile name for the engineer?",
                }).then((engineerData)) =>

        }
        if (data.role == "intern"){
            inquirer.prompt({
                type: "input",
                name: "school",
                message: "Which school does the intern attend?"
            }).then((internData)) => 

        }


