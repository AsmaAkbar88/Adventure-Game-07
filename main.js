#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreasse() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fulIncrese() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreasse() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let play_man = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.whiteBright("\n \nPlease Enter Your Name: ")
    }
]);
let open = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: chalk.whiteBright("\n\n Select your Oppenent: "),
        choices: [
            "Skeleton", "Alien", "Zombie"
        ]
    }
]);
let p1 = new Player(play_man.name);
let o1 = new Opponent(open.Select);
do {
    //Skeleton
    if (open.Select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow(" \nWhat would you like to do?"),
                choices: [
                    "Attack", "Drink Portion", "Run for your life"
                ]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel} \n `);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("\n You lose, Better luck Next time"));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright("\n You Win.... "));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fulIncrese();
            console.log(chalk.greenBright(chalk.yellow(` \n You Drink Health Portion your fuel is ${p1.fuel}`)));
            console.log("_".repeat(60));
            ;
        }
        if (ask.opt === "Run for your life") {
            console.log(chalk.red(chalk.red(" \nYou lose, Better luck Next time")));
            console.log("_".repeat(60));
            process.exit();
        }
    }
    //Alien
    if (open.Select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow(" \nWhat would you like to do?"),
                choices: [
                    "Attack", "Drink Portion", "Run for your life"
                ]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel} \n `);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("\n You lose, Better luck Next time"));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright("\n You Win.... "));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fulIncrese();
            console.log(chalk.greenBright(chalk.yellow(` \n You Drink Health Portion your fuel is ${p1.fuel}`)));
            console.log("_".repeat(60));
            ;
        }
        if (ask.opt === "Run for your life") {
            console.log(chalk.red(chalk.red(" \nYou lose, Better luck Next time")));
            console.log("_".repeat(60));
            process.exit();
        }
    }
    //Zombie
    if (open.Select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow(" \nWhat would you like to do?"),
                choices: [
                    "Attack", "Drink Portion", "Run for your life"
                ]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel} \n `);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("\n You lose, Better luck Next time"));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreasse();
                console.log(`\n ${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright("\n You Win.... "));
                    console.log("_".repeat(60));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fulIncrese();
            console.log(chalk.greenBright(chalk.yellow(` \n You Drink Health Portion your fuel is ${p1.fuel}`)));
            console.log("_".repeat(60));
            ;
        }
        if (ask.opt === "Run for your life") {
            console.log(chalk.red(chalk.red(" \nYou lose, Better luck Next time")));
            console.log("_".repeat(60));
            process.exit();
        }
    }
} while (true);
