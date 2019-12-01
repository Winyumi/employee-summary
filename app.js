// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function validate(input) {
    return input !== '';
}

const questions = {
    type: function() {
        return {
            message: "Which type of team member would you like to add?",
            type: "list",
            name: "member",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }
    },
    item: function(member, variable, item = variable) {
        return {
            message: `What is your ${member.toLowerCase()}'s ${item}?`,
            type: "input",
            name: variable,
            validate: validate
        }
    }
};

let employees = [];

async function addRole(member) {
    let { name } = await inquirer.prompt(questions.item(member, "name", "full name"));
    let { id } = await inquirer.prompt(questions.item(member, "id", "ID number"));
    let { email } = await inquirer.prompt(questions.item(member, "email", "email address"));
    switch (member) {
        case "Manager":
            let { phone } = await inquirer.prompt(questions.item(member, "phone", "office phone number"));
            employees.push(new Manager(name, id, email, officeNumber));
            break;
        case "Engineer":
            let { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username"));
            employees.push(new Engineer(name, id, email, github));
            break;
        case "Intern":
            let { school } = await inquirer.prompt(questions.item(member, "school"));
            employees.push(new Intern(name, id, email, school));
            break;
    }
}

async function init() {

    await addRole("Manager");

    let member = "";
    let exit = "I don't want to add anymore team members";
    while (member != exit) {
        let { member } = await inquirer.prompt(questions.type());
        if (member === exit) {
            console.log(employees);
            return;
        }
        await addRole(member);
    }

}

init();
