//All core modeules are builtin agr hamy kisi modeule koo add krna hoto simple 
// require("modeule name"); likh kr kisi b modeule ko add krsakty h
console.log("WELCOME TO CORE MODEULES");
const fs = require("fs"); //now we can use the functionalities of file system modeule
//console.log(fs);
fs.writeFileSync("read.txt", " Welcome to node js"); //create file read.txt amd writw wel..
fs.appendFileSync("read.txt", " Learning on thapa tech"); //to write smthing new to file
//const bufferReader = toString(fs.readFileSync("read.txt"));
const bufferReader = fs.readFileSync("read.txt"); //will returnus a buffer data
//console.log(`Buffer Data : ${bufferReader}`);
console.log(bufferReader);
//buffer is mianly use to store binary data
//while reading from a file or reacieving packets over the network.
//file sa data read krny k leya hamy usy phly string ma convert krna hoga.toString()
const resReadData = bufferReader.toString();
console.log(" Reading from the file : " + resReadData);
//how to rename a file
fs.renameSync("read.txt", "newRead.txt");