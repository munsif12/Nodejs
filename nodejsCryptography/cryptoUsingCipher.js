// Encryption
const crypto = require("crypto");
const eKeyUser1 = "mun124";
const msg = "i am munsif am i am encrypting my msg using cipher";
const Encryption = crypto.createCipher("aes192", eKeyUser1).update(msg, "uth-8", "hex");
console.log(`Encrypted msg => ${Encryption}`);

//both keys(sender,receiver) have to be same.

//Decryption 
const dKeyUser2 = "mun124";
var encrypted = 'ba73591889f9Sac991cde56e3188d9cebd5c91297df32fc9e95154b451cc5a2740f4150f6cae4f1baa5bf8301ac1a654b';
const decryption = crypto.createDecipher("aes192", dKeyUser2).update(encrypted, "hex", "utf-8");
console.log(console.log(`Decrypted msg => ${decryption}`));