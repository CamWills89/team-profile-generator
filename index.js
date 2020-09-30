//FS to write the html file
const fs = require("fs");
// Inquirer to get user responses
const inquirer = require("inquirer");

//links to constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//team array to store the user responses in
const team = []

function userResponse () {
    return inquirer.prompt({
    
})
}