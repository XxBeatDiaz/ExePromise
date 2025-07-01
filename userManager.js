import fs from "fs";
import { question } from "readline-sync";

const create = function (path, str) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const arrData = JSON.parse(data);
        if (arrData.includes(str)) {
            console.log("Data already exists");
            return;
        }
        arrData.push(str);
        const newData = JSON.stringify(arrData);

        fs.writeFile(path, newData, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Data added successfully`);
        });
    });
}

const read = function (path) {
    
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.parse(data));
    });
}

const update = function (path, exsitsStr, upStr) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const arrData = JSON.parse(data);
        if (!arrData.includes(exsitsStr)) {
            console.log(`The <${exsitsStr}> not exsits in the file`);
            return;
        }

        const newData = JSON.stringify(
            arrData.map(str => {
                if (str === exsitsStr) {
                    return upStr;
                } else return str;
            })
        );

        fs.writeFile(path, newData, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Data update successfully: (${exsitsStr} with ${upStr})`);
        })
    });
}

const deleteStr = function (path, deStr) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const arrData = JSON.parse(data);
        if (!arrData.includes(deStr)) {
            console.log(`The <${deStr}> not exsits in the file`);
            return;
        }

        const newData = JSON.stringify(
            arrData.filter(str => {
                if (str === deStr) {
                    return undefined;
                }else{
                    return str;
                }
            })
        );
        
        fs.writeFile(path, newData, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Data deleted successfully");
        })
    });
}

const getUserName = function(){
    const userName = question("Enter your user name> ");
    return userName.trim();
}

const getExsitsUserName = function(){
    const exsitsUserName = question("Enter exsits user name> ");
    return exsitsUserName.trim();
}

export{create, read, update, deleteStr, getUserName, getExsitsUserName}