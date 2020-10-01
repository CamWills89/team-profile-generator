//FS to write the html file
const fs = require("fs");
// Inquirer to get user responses
const inquirer = require("inquirer");

//links to constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//importing write and copyfile functions
const { writeFile, copyFile } = require("./generate-site");

//team array to store the user responses in
const team = [];

function managerPrompt() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter an employee's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "please add the Manager role to your profile",
        choices: ["Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their ID number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.role,
        answers.email,
        answers.id,
        answers.officeNumber
      );
      team.push(newManager);
      console.log(team);
      addTeamMembers();
    });
}

function addTeamMembers() {
  console.log(`
  ======================
  Add a New Team Member
  ======================
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter an employee's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their ID number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "please select their role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "Please enter Engineer's GitHub username",
              validate: (githubInput) => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter Engineer's GitHub username");
                  return false;
                }
              },
            },
          ])
          .then((roleAnswer) => {
            const newEngineer = new Engineer(
              answers.name,
              answers.role,
              answers.email,
              answers.id,
              roleAnswer.github
            );
            team.push(newEngineer);
            inquirer
              .prompt([
                {
                  type: "confirm",
                  name: "confirmAddMember",
                  message: "Would you like to enter another team member?",
                  default: false,
                },
              ])
              .then((teamArr) => {
                team.push(teamArr);
                if (teamArr.confirmAddMember) {
                  return addTeamMembers(team);
                } else {
                  console.log(team);
                  return team;
                }
              });
          });
      }
      if (answers.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "Please enter Intern's school name",
              validate: (schoolInput) => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter Intern's school name");
                  return false;
                }
              },
            },
          ])
          .then((roleAnswer) => {
            const newInern = new Intern(
              answers.name,
              answers.role,
              answers.email,
              answers.id,
              roleAnswer.school
            );
            team.push(newInern);
            inquirer
              .prompt([
                {
                  type: "confirm",
                  name: "confirmAddMember",
                  message: "Would you like to enter another team member?",
                  default: false,
                },
              ])
              .then((teamArr) => {
                team.push(teamArr);
                if (teamArr.confirmAddMember) {
                  return addTeamMembers(team);
                } else {
                  console.log(team);
                  return team;
                }
              });
          });
      }
    });
}

managerPrompt();
