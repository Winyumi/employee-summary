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

async function init() {

    let manager = true;
    let exit = "I don't want to add anymore team members";
    while (member != exit) {
        if (manager) {
            var member = "Manager";
        } else {
            var { member } = await inquirer.prompt(questions.type());
            if (member === exit) {
                return;
            }
        }
        var { name } = await inquirer.prompt(questions.item(member, "name", "full name"));
        var { id } = await inquirer.prompt(questions.item(member, "id", "ID number"));
        var { email } = await inquirer.prompt(questions.item(member, "email", "email address"));
        switch (member) {
            case "Manager":
                var { phone } = await inquirer.prompt(questions.item(member, "phone", "phone number"));
                var employee = new Manager(id, name, email, phone);
                break;
            case "Engineer":
                var { github } = await inquirer.prompt(questions.item(member, "github", "GitHub username"));
                var employee = new Engineer(id, name, email, github);
                break;
            case "Intern":
                var { school } = await inquirer.prompt(questions.item(member, "school"));
                var employee = new Intern(id, name, email, school);
                break;
        }
        manager = false;
    }


    console.log(employee);

}

init();
