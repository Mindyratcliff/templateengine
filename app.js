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
      type: "list",
      name: "role",
      message: ["manager", "engineer", "intern"],
    },
    {
       type: "confirm",
       name: "roleConfirm",
       message: 

    },
    {
      type: "input",
      name: "email",
      message: "Please provide the email of the employee",
    },
    {
       type: "" 
    }
  ]);

const internQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the intern",
    },
    {
      type: "input",
      name: "ID",
      message: "Please enter the ID of the intern",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter which school or university the intern attends",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the email of the intern",
    },
  ]);

const engineerQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the engineer",
    },
    {
      type: "input",
      name: "ID",
      message: "Please enter the ID of the engineer",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the GitHub account for the engineer",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the email of the engineer",
    },
  ]);
