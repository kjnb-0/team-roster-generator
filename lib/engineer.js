const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, specific) {
    //name,id,email from employee
    super(name,id,email);
    this.specific = specific;
    this.role = "Engineer"
    }


getGithub() {
    return this.specific
}

getRole() {
    return "Engineer"
}

}

module.exports = Engineer;
