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
                try {
                    let html = render(employeeArr)
                    fs.writeFileSync(outputPath, html, "utf-8")
                    console.log("\nGenerating your HTML file\n")
                }
                catch(err) {
                    console.log(err)
                }
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
            employeeArr.push(intern)
            startApp()
        })
}


// Begins the app
startApp()

