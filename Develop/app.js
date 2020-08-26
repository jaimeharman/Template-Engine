const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = []

// Begins the add employee process
function startApp() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Do you want to enter a new employee?",
                name: "add",
                choices: ["Yes", "No"]
            }
        ])
        .then((answer) => {
            if (answer.add === "Yes") {
                addEmployee()
            } else {
                // let html = render(employeeArr)
            }
        })
}

// Chooses which employee function to run
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Select an employee type to enter:",
                name: "employee",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])
        .then((answer) => {
            switch(answer.employee) {
                case "Manager":
                    addManager()
                    break
                case "Engineer":
                    addEngineer()
                    break
                case "Intern":
                    addIntern()
                    break
            }
        })
}

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter manager's name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter manager's ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter manager's email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter manager's office number",
                name: "officeNumber"
            }
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            )
            employeeArr.push(manager)
            startApp()
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter engineer's name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter engineer's ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter engineer's email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter engineer's github",
                name: "github"
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            )
            employeeArr.push(engineer)
            startApp()
        })
}


function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter intern's name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter intern's ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter intern's email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter intern's school",
                name: "school"
            }
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
            employeeArr.push(school)
            startApp()
        })
}

// addIntern()

// Begins the app
startApp()


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
