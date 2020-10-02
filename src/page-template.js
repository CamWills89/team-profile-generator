//icon styles:
//manager = <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot"> Manager</h6>
//engineer = <h6 class="card-subtitle mb-2 text-white fas fa-glasses"> Engineer</h6>
//intern = <h6 class="card-subtitle mb-2 text-white fas fa-user-graduate"> Intern</h6>

//perhaps try to use the getRole() methods I created in my tests

const generateCards = (teamArray) => {
    console.log(teamArray);
    
    
  return `
        ${teamArray
          .filter(({ Manager }) => Manager)
          .map(({ name, id, email, role, officeNumber }) => {
            return `
            <div class="row">
        <div class="card col border-dark" style="width: 18rem">
          <div class="card-body card-header text-white bg-dark">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot">
              ${role}
            </h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">${officeNumber}</li>
          </ul>
        </div>
      </div>
          `;
          })
          .join("")}
  
       ${teamArray
          .filter(({ Engineer }) => Engineer)
          .map(({ name, id, email, role, github  }) => {
            return `
            <div class="row">
        <div class="card col border-dark" style="width: 18rem">
          <div class="card-body card-header text-white bg-dark">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot">
              ${role}
            </h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">${github}</li>
          </ul>
        </div>
      </div>
          `;
          })
      .join("")}

          ${teamArray
          .filter(({ Intern }) => Intern)
          .map(({ name, id, email, role, school  }) => {
            return `
            <div class="row">
        <div class="card col border-dark" style="width: 18rem">
          <div class="card-body card-header text-white bg-dark">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot">
              ${role}
            </h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">${school}</li>
          </ul>
        </div>
      </div>
          `;
          })
          .join("")}
    `;
};

const generateProjects = (teamArray) => {
  console.log(teamArray);
    const cards = teamArray;
    console.log(cards);

  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="bg-dark">
      <h1>My Team</h1>
    </header>
    <main class="container">
      ${generateCards(cards)}
    </main>
  </body>
</html>`;
};

module.exports = generateProjects;
