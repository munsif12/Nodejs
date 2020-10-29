// 1 : in node js every individual file is a modeule so we must have
// to import it before using its functionalities.
// 2 : har modeules ma funtions or veriables private hoty h jabtak
//unko public na keya jai dusry modeules unko access nhi karsakty.
const addMod = require('./operator');
//addMod is now an object
console.log('');
console.log("            RESULTS           ")
console.log('*** Before DESTRUCTURING the object. ***');
console.log(addMod);
console.log(addMod.name);
console.log(addMod.add(5, 6));
console.log('');
//if you dont want to write obj.name etc so use object destructuring from ES6
//object ka ander waly name same hony chaheya joka return krrha uske 
//object property name must be same
const {
    add,
    name,
    mul,
    div,
    sub
} = require('./operator');
console.log('*** After DESTRUCTURING the object. ***');
console.log('Name : ' + name);
console.log('Addition : ' + add(12, 6));
console.log('Subtraction : ' + sub(12, 6));
console.log('Multiplication : ' + mul(12, 6));
console.log('Division : ' + div(12, 6));