//crreating file in ASYNCHRONOUS MODE
const fs = require('fs');
//Async hamy call back funtion b specify krna hota h 
//callback ka maqsab check krna k koi error ha k nhi or error nhi ha to jo msg show krwana hua to krna
// 1 : callback called when the taskis completed.
// 2 : calback has a argument that tells whether the tasked completed successfully or not

fs.writeFile("readme.txt", " Hello!Today is aeowsome", (err) => {
    console.log("file is created.");
    console.log(err);
});

fs.appendFile('readme.txt', ' i am appending Async file', (err) => {
    console.log(" data appended successfully.");
    console.log(err);
});

//utf-8 is use to convert buffer data to string 
// to read data we specify two parameter- 
// one for error and the other for the data-
//  we want to read from the file.
fs.readFile('readme.txt', 'UTF-8', (err, data) => {
    console.log("data of file :");
    console.log(data);
});

//if we dont write utf-8
fs.readFile('readme.txt', (err, data) => {
    console.log(data);
});