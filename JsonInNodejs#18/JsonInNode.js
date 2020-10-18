//Json stands for javascript object notation 
//Json is lightweight format for storing and transporting data.
//Json is often use when data is sent from a scrver to a webPage
const fs = require('fs');
const chalk = require('chalk');

const studentInfo = {
    StudentMunsif: {
        name: 'Munsif',
        age: 22,
        degree: 'BSCS-6A',
        cgpa: [2.7, 2.2, 3.4, 3.2, 3.5],
        sportsBg: {
            pro: 'Badmintion',
            medels: 5
        }
    },
    StudentHamza: {
        naame: 'hamza',
        age: 21,
        deree: 'BSCS-A',
        cgpa: [3.5, 3.2, 3, 2.9, 3.5],
        sportsBg: {
            pro: 'Cricket',
            medels: 3
        }
    },
    StudentKazmii: {
        naame: 'kazmii',
        age: 20,
        deree: 'BSCS-6A',
        cgpa: [3.3, 3.0, 3, 2.7, 3.3],
        sportsBg: {
            pro: '100-Meter_Running',
            medels: 7
        }
    }
}
console.log('');
console.log('************ JS-> JSON && JSON -> JS **************')
// 1: Converting Js object into JSON
// JSON.stringify(obj) method is use to convert JS object into JSON
console.log('');
console.log('*** JSON DATA***');
const jsonData = JSON.stringify(studentInfo);
console.log(chalk.green(jsonData));

// 2: Converting JSON object into JS
//JSON.stringify(obj) method is use to convert JSON object into JS
console.log('');
console.log('*** JS DATA***');
const JsData = JSON.parse(jsonData);
//console.log(`JsData : ${JsData}`);
console.log(JsData);
console.log('');
console.log('************* TASK DATA ***********');
//**************TASK*****************
// 1 : convert JS to json
// 2 : Add json data to a json file
// 3 : read data from the file
// 4 : again convert to js obj

//writing json data to a newely created file

fs.writeFile('copyJsonDataToFile.json', jsonData, (err) => {
    console.log(err);
});
//reading the newely created json file data and converting json data to js 
fs.readFile('copyJsonDataToFile.json', 'UTF-8', (err, data) => {
    console.log('');
    console.log('*** JSON DATA***');
    console.log(chalk.green(data));
    //converting json data to js
    console.log('');
    console.log('*** JS DATA***');
    const ConJsonData = JSON.parse(data);
    console.log(ConJsonData);
});