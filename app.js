// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


function validate(a) {
    return a !== '';
}

const questions = [
    {
        message: "Which type of team member would you like to add?",
        type: "list",
        name: "type",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    },
    {
        message: `What is your ${type.toLowerCase()}'s name?`,
        type: "input",
        name: "name",
        validate: validate
    },
    {
        message: `What is your ${type.toLowerCase()}'s id?`,
        type: "input",
        name: "id",
        validate: validate
    },
    {
        message: `What is your ${type.toLowerCase()}'s name?`,
        type: "input",
        name: "name",
        validate: validate
    },
    {
        message: `What is your ${type.toLowerCase()}'s name?`,
        type: "input",
        name: "name",
        validate: validate
    },
    {
        message: `What is your ${type.toLowerCase()}'s name?`,
        type: "input",
        name: "name",
        validate: validate
    }
];
