const inquirer = require("inquirer");
const fs = require("fs");

//I want to generate a webpage that displays my team's basic info
const questions = () =>
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
                }).then((managerData) => {
                    const managerProfile = fs.appendFile(
                        `<div class="card" style="width: 18rem;">
                        <img src="https://www.shutterstock.com/image-vector/online-training-process-icon-flat-style-1176599782" class="card-img-top" alt="Icon for directory">
                        <div class="card-body">
                          <h5 class="card-title">${data.name}</h5>
                          <p class="card-text">${data.role}</p>
                          <p class="card-text">${data.email}</p>
                          <p class="card-text">${managerData.officeNumber}</p>
                        </div>
                      </div>`
                    );
                }
                );
        
        if (data.role == "engineer"){
                inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "What is the GitHub profile name for the engineer?",
                }).then((engineerData) => {
                    const engineerProfile = fs.appendFile(
                        `<div class="card" style="width: 18rem;">
                        <img src="https://www.shutterstock.com/image-vector/online-training-process-icon-flat-style-1176599782" class="card-img-top" alt="Icon for directory">
                        <div class="card-body">
                          <h5 class="card-title">${data.name}</h5>
                          <p class="card-text">${data.role}</p>
                          <p class="card-text">${data.email}</p>
                          <p class="card-text">${engineerData.github}</p>
                        </div>
                      </div>`
                    );
                }

                )
            }
        if (data.role == "intern"){
            inquirer.prompt({
                type: "input",
                name: "school",
                message: "Which school does the intern attend?"
            }).then((internData) => {
                const internProfile = fs.appendFile(
                    `<div class="card" style="width: 18rem;">
                    <img src="https://www.shutterstock.com/image-vector/online-training-process-icon-flat-style-1176599782" class="card-img-top" alt="Icon for directory">
                    <div class="card-body">
                      <h5 class="card-title">${data.name}</h5>
                      <p class="card-text">${data.role}</p>
                      <p class="card-text">${data.email}</p>
                      <p class="card-text">${internData.school}</p>
                    </div>
                  </div>`
                );
            }
            )

        };


