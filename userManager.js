import fs from "fs";



const read = function(path){
    fs.readFile(path,"utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    })
}

