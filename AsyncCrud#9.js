const fs = require('fs');
//making a directory
fs.mkdir('crudAsync#9', (err) => {
    console.log('folder created');
});
//creating a file 
fs.writeFile('crudAsync#9/CrudOPUsingAsync#9.txt', ' Hi i am using Async method to create file', (err) => {
    console.log('file created');
});
// appending a file 
fs.appendFile('./crudAsync#9/CrudOPUsingAsync#9.txt', ' and I am appending the file. ', (err) => {
    console.log('file appended');
});
//reading data from a file
fs.readFile('./crudAsync#9/CrudOPUsingAsync#9.txt', 'UTF-8', (err, data) => {
    console.log(data);
});
//renamiing a file
// fs.rename("./crudAsync#9/CrudOpusingAsync#9.txt", "./crudAsync#9/CrudOPUsingAsync#9.txt", (err) => {
//     console.log('file appended');
// });