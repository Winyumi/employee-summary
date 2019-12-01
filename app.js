// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const validate = {
    required: input => input !== '' ? true : "This field is required.",
    name: input => input !== '' ? true : "Please enter a name.",
    id: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive whole number.",
    email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address."
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
    item: function(member, variable, item = variable, validate) {
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
    let { name } = await inquirer.prompt(questions.item(member, "name", "full name", validate.name));
    let { id } = await inquirer.prompt(questions.item(member, "id", "ID number", validate.id));
    let { email } = await inquirer.prompt(questions.item(member, "email", "email address", validate.email));
    switch (member) {
        case "Manager":
            let { phone } = await inquirer.prompt(questions.item(member, "phone", "office phone number", validate.required));
            employees.push(new Manager(name, id, email, phone));
            break;
        case "Engineer":
            let { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username", validate.required));
            employees.push(new Engineer(name, id, email, github));
            break;
        case "Intern":
            let { school } = await inquirer.prompt(questions.item(member, "school", "school", validate.required));
            employees.push(new Intern(name, id, email, school));
            break;
    }
}

async function init() {
    console.log("Please build your team");
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
