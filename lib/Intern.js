const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //add constructor from parent 'Employee' object
    super(name, id, email);

    this.school = school;
  }
  // getSchool()
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;