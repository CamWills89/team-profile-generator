const Employee = require("./Employee");

// officeNumber
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //add constructor from parent 'Employee' object
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;
// getRole() // Overridden to return 'Manager'
