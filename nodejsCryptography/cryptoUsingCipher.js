// Encryption
const crypto = require("crypto");
const key = "mun124";
const msg = "i am munsif am i am encrypting my msg using cipher";
const Encryption = crypto.createCipher("camellia-256-cbc", key).update(msg, "uth-8", "hex");
console.log(`Encrypted msg => ${Encryption}`);
//console.log(crypto.getCiphers()); to get all the ciphers here i am using => camellia-256-cbc

//Decryption
// const dKey = "munsif456";
// const encryptedMsg = "40deddb60b1165a88784dbfb9138f5ac69915c1c117f5e3f30bf7d99c680708dfd653a43bf96f020b270a4f127ce3433eec7";
// const decryption = crypto.createDecipher('camellia-256-cbc', dKey).update(encryptedMsg, 'hex', 'utf-8');
// //decryption +=
// console.log(decryption);
const dKey = "munsif456";
const decipher = crypto.createDecipher('camellia-256-cbc', dKey);
var encrypted = '40deddb60b1165a88784dbfb9138f5ac69915c1c117f5e3f30bf7d99c680708dfd653a43bf96f020b270a4f127ce3433eec7';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted); 