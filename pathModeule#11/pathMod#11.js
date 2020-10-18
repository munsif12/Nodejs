const path = require('path');
console.log(` File Directory : ${path.dirname('C:/Users/Munsif Ali Misri/Desktop/JS try/NODEJS/pathModeule#11/pathMod#11.js')}`);
//to get the type of file is this like .js*/7, .txt, .pdf ,.jpg etc
console.log(` Extension Name : ${path.extname('C:/Users/Munsif Ali Misri/Desktop/JS try/NODEJS/pathModeule#11/pathMod#11.js')}`);
//to get the file name
console.log(` Filename : ${ path.basename('C:/Users/Munsif Ali Misri/Desktop/JS try/NODEJS/pathModeule#11/pathMod#11.js')}`);
//path.parse return a object chk the result
// 1: dir <string>
// 2: root <string>
// 3: base <string>
// 4: name <string>
// 5: ext <string>
console.log(path.parse('C:/Users/Munsif Ali Misri/Desktop/JS try/NODEJS/pathModeule#11/pathMod#11.js'));
const parseData = path.parse('C:/Users/Munsif Ali Misri/Desktop/JS try/NODEJS/pathModeule#11/pathMod#11.js');
//good for validation
if (parseData.ext === '.js') {
    console.log('Its a Javascript file');
} else console.log("It's not a Javascript file.");