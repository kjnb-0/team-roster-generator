const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, specific) {
    //name,id,email from employee
    super(name,id,email);
    this.specific = specific;
    this.role = "Intern"
    }


getSchool() {
    return this.specific
}

getRole() {
    return "Intern"
}

}


module.exports = Intern;
