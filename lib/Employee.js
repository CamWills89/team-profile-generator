//creating an employee object to be inherited by the other classes
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // accessing name from constructor
  getName() {
    return this.name;
  }

  // accessing ID from constructor
  getId() {
    return this.id;
  }
  // accessing email from constructor
  getEmail() {
    return this.email;
  }
  //accessing the constructor object
  getRole() {
    return this.constructor.name;
  }
}
// getRole() // Returns 'Employee'
// The other three classes will extend Employee.
module.exports = Employee;
