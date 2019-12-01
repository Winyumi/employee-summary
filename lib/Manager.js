const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, phone) {
        super(id, name, email);
        this.phone = phone;
    }
}

module.exports = Manager;
