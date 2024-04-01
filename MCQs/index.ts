import inquirer from "inquirer";
import chalk from "chalk";

function points(number: number){
    if (answer === 1) {
        console.log(`You got ${answer} point.`);
    } else {
        console.log(`You got ${answer} points.`);
    }
}
let answer = 0;
let question1 = await inquirer.prompt([
    {
    message: "Which file extension is commonly used for TypeScript files? ",
    type: "list",
    name: "answer",
    choices: [".js",".ts",".txt",".html"]
    },

]);
if (question1.answer === ".ts"){
    console.log(chalk.green(`Correct`));
    answer++
}else{
    console.log(chalk.red(`Incorrect`))
} 

let question2 = await inquirer.prompt ([
    {
    message: `What does the "tsc" command do in TypeScript?`,
    type: "list",
    name:"answer",
    choices: ["Transpiles TypeScript code to JavaScript","Nanga Runs TypeScript code directly without transpiling","Validates TypeScript syntax without generating output","Installs TypeScript globally on the system"]
    },
])

if(question2.answer === "Transpiles TypeScript code to JavaScript"){
    console.log(chalk.green(`correct`))
    answer++
}else{
    console.log(chalk.red(`Incorrect`))
}

let question3 = await inquirer.prompt ([
    {
    message: "Which of the following best describes TypeScript's relationship with JavaScript?",
    type: "list",
    name:"answer",
    choices: ["Separate","Subset","Superset","Alternative"]
    },
])

if(question3.answer === "Superset"){
    console.log(chalk.green(`correct`))
    answer++
}else{
    console.log(chalk.red(`Incorrect`))
}


let question4 = await inquirer.prompt ([
    {
    message: "What is TypeScript?",
    type: "list",
    name:"answer",
    choices: ["Scripting","Superset","Markup","Database"]
    },
])

if(question4.answer === "Superset"){
    console.log(chalk.green(`correct`))
    answer++
}else{
    console.log(chalk.red(`Incorrect`))
}

points(answer)

