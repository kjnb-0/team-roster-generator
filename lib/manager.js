const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    //name,id,email from employee
    super(name,id,email);
    this.officeNumber = officeNumber;
    this.role = "Manager"
    }

getRole() {
    return "Manager"
}

}

module.exports = Manager;
