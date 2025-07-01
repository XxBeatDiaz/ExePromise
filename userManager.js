import fs from "fs";
import { json } from "stream/consumers";

const create = function (path, str) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const arrData = JSON.parse(data);
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
};


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
                    console.log(str);
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

    });
}

const path = "DB/db.txt"
// create(path, "yona");
// update(path, "tami", "noam");
setTimeout(() => {
    read("DB/db.txt")
}, 2000)

