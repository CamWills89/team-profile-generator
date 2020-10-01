//FS to write the html file
const fs = require("fs");
// Inquirer to get user responses
const inquirer = require("inquirer");

//links to constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatePage = require("./src/page-template");
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
        answers.id,
        answers.email,
        answers.role,
        answers.officeNumber
      );
      team.push(newManager);
    });
}

function addTeam() {
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
              answers.id,
              answers.email,
              answers.role,
              roleAnswer.github
            );
            team.push(newEngineer);
            addNewMember(team);
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
              answers.id,
              answers.email,
              answers.role,
              roleAnswer.school
            );
            team.push(newInern);
            addNewMember(team);
          });
      }
    });
}

const addNewMember = (team) => {
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
      if (teamArr.confirmAddMember) {
        return addTeam(team);
      }
      if (!teamArr.confirmAddMember) {
        console.log(team);
        return team;
      }
    //   generatePage(team)
    //     .then((pageHTML) => {
    //       return writeFile(pageHTML);
    //     })
    //     .then((writeFileResponse) => {
    //       console.log(writeFileResponse);
    //       return copyFile();
    //     })
    //     .then((copyFileResponse) => {
    //       console.log(copyFileResponse);
    //     });
    })
    //   .then((teamArr) => {
    //   return generatePage(team);
    // })
    // .then((pageHTML) => {
    //   return writeFile(pageHTML);
    // })
    // .then((writeFileResponse) => {
    //   console.log(writeFileResponse);
    //   return copyFile();
    // })
    // .then((copyFileResponse) => {
    //   console.log(copyFileResponse);
    // })
};

managerPrompt()
  .then(addTeam)
    .then((team) => {
      return generatePage(team);
    })
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then((copyFileResponse) => {
      console.log(copyFileResponse);
    })
  .catch((err) => {
    console.log(err);
  });
