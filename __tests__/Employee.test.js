const Employee = require("../lib/Employee");
//name, id and email
test("creates an employee object", () => {
  const employee = new Employee("Cam", 1, "test@test.com");

  expect(employee.name).toBe("Cam");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
// getName()
test("get name from getName()", () => {
  const employee = new Employee("Cam");

  expect(employee.getName()).toBe("Cam");
});
// getId()
test("get ID from getID()", () => {
  const employee = new Employee("Cam", 1);

  expect(employee.getId()).toBe(1);
});

// getEmail()
test("get ID from getID()", () => {
  const employee = new Employee("Cam", 1, "test@test.com");

  expect(employee.getEmail()).toBe("test@test.com");
});

// getRole() // Returns 'Employee'
test("get role from getRole()", () => {
  const employee = new Employee("Cam", 1, "test@test.com");
//expected to return 'Employee'
  expect(employee.getRole()).toBe("Employee");
});
// The other three classes will extend Employee.
