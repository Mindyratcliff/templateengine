const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js")
const render = require("./lib/htmlRenderer")

const employeeArray = [];

const questions = [
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
      choices: ["manager", "engineer", "intern"],
    },


]

const ask = () => {
    inquirer.prompt(questions).then((data) => {
        if (data.role == "manager") {
        askManager();
        }
        if (data.role == "engineer"){
        askEngineer();
        }
        if (data.role == "intern"){
        askIntern();
        }
        askAgain();
    })
}

const askManager = () => {
    inquirer.prompt({
        type: "input",
        name: "office",
        message: "What is the office number for the manager?",
    }).then((managerData) => {
        let newManager = new Manager(data.name, data.ID, data.email, managerData.office);
        employeeArray.push(newManager);
        let html = render(employeeArray);
        console.log(html);
    }
        );
};

const askEngineer = () => {
    inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is the GitHub profile name for the engineer?",
    }).then((engineerData) => {
        let newEngineer = new Engineer(data.name, data.ID, data.email, engineerData.github);
        employeeArray.push(newEngineer);
        let html = render(employeeArray);
    }

    );
};

const askIntern = () => {
    inquirer.prompt({
        type: "input",
        name: "school",
        message: "Which school does the intern attend?"
    }).then((internData) => {
        let newIntern = new Intern(data.name, data.ID, data.email, internData.school);
        employeeArray.push(newIntern);
        let html = render(employeeArray);
    }
    );


};

const askAgain = () => {
    inquirer.prompt({
            type: 'confirm',
            name: 'askAgain',
            message: 'Would you like to add another employee (just hit enter for YES)?',
            default: true,
    }).then((answer) => {
        if (answer.askAgain) {
            ask();

        }
    }
    );


};
