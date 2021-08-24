const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, specific) {
    //name,id,email from employee
    super(name,id,email);
    this.specific = specific;
    this.role = "Manager"
    }

getOfficeNumber(){
    return this.specific
}

getRole() {
    return "Manager"
}

}

module.exports = Manager;
