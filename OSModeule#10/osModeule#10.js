// all the methods are available online
const os = require('os');
//to get the architectre of the system
console.log('Architecture : ' + os.arch());
const totalMemory = os.totalmem();
console.log(`Total memory : ${totalMemory/1024/1024/1024} Gb.`);
const freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory} bit.`);
//converting bits in gb 
console.log(`Available Memory :${freeMemory/1024/1024/1024} Gb.`);
console.log('Host Name : ' + os.hostname());
console.log('Plat Form : ' + os.platform());