import fs from "fs";

const read = function(path){
    fs.readFile(path,"utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}

const create = function(path, data){
    fs.appendFile(path, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Data added successfully`);
    });
}

const 