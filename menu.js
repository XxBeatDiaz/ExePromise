import { question } from "readline-sync";
import * as funcs from "./userManager.js";

const printMenu = function(){
    console.log("\nChoose an action:");
    console.log("1. Add user");
    console.log("2. Show all users");
    console.log("3. Update user");
    console.log("4. Delete user");
    console.log("5. Exit");
}

function menu(choice){
    
    const path = "./DB/db.txt";
    switch(choice){
        case "1": 
            funcs.create(path, funcs.getUserName()); 
            break;
        case "2": 
            funcs.read(path); 
            break;
        case "3": 
            funcs.update(path, funcs.getExsitsUserName(), funcs.getUserName()); 
            break;
        case "4": 
            funcs.deleteStr(path, funcs.getExsitsUserName()); 
            break;
        case "5": break;
    }
}

const start = function(){
    printMenu();
    const choice = question("Enter your choice> ");
    menu(choice);
}

export {start}