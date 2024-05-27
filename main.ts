#! /usr/bin/env node

import inquirer from "inquirer"

class Hero {
    name:string;
    health = 100;

    constructor(name:string){
     this.name = name   
}
    decreaseHealth(){
        this.health -= 20
    }

    increaseHealth(){
        this.health = 100
    }
}


// For enemy

class Enemy {
    name:string;
    health = 100;

    constructor(name:string){
     this.name = name   
}
    decreaseHealth(){
        this.health -= 20
    }

    increaseHealth(){
        this.health = 100
    }
}

// Step 2
async function main(){
    const { heroName } = await inquirer.prompt([

        {
              type: "input",
              name: "heroName",
              message: "Enter Your Hero Name:"

        }

    ])

    // Enemy object

    const { enemyType } = await inquirer.prompt([

        {
                 
            type: "list",
            name: "enemyType",
            choices: ["alien","witch","zombie"],
            message: "Select the enemy you fight with:"

        }
    ])
    
    // Step 3 battle field
    const hero = new Hero (heroName);
    const enemy = new Enemy(enemyType);

    console.log(` ${enemy.name} v/s ${hero.name}`);


    // Step 4 action
    do{
        const {action} = await inquirer.prompt([
            // action object

    {
        
        type: "list",
        name: "action",
        choices: ["attack", "defend","run"],
        message: "Choose the attack type to perform action",

    }

        ])
    
    
    // Step 5 switch case 
    switch (action) {
        case "attack":

            const randomNum = Math.random();
            if(randomNum > 0.5) {
                hero.decreaseHealth();
                console.log(`${hero.name} heath: ${hero.health}`);
                console.log(`${enemy.name} health: ${enemy.health}`);
                if(hero.health <= 0) {
                    console.log("You lose! try again");
                    return;
                } 
                
                
            }else {
                //enemy health decrease
                enemy.decreaseHealth();
                console.log(`${hero.name} heath: ${hero.health}`);
                console.log(`${enemy.name} health: ${enemy.health}`);
                if(enemy.health <= 0) {
                    console.log("Congraulations! you won!");
                    return;
                } 
            }
             break;
            }

    } while(true);
    
}    

main();