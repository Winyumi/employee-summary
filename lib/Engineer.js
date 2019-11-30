const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(id, name);
        this.github = github;
    }
}

module.exports = Engineer;
