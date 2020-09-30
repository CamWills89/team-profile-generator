const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

//GitHub username
test("creates an Engineer github username", () => {
  const manager = new Manager("Cam", 1, "test@test.com", 100);

  expect(manager.officeNumber).toBe(100);
});

// getRole() // Overridden to return 'Manager'
test('get manager role from getRole()', () => {
      const manager = new Manager("Cam", 1, "test@test.com", 100);
    //expected to override to return 'Manager'
    expect(manager.getRole()).toBe('Manager');
})



// getGithub()

// getRole() // Overridden to return 'Engineer'