//to run npm use (npm init command)
//command run keny ka bad apko kuch values mangy ga like entry point,name,desc,version etc
//ya sub fill krny ka bad apko pakage.json ke file mily ge
// CHALK(website https://www.npmjs.com/package/chalk) modeule console elements ko diffent colors dany ka ley h
// 1:chalk modeue ko hamna (npm i chalk)  krka root(npmModeule#13) folder ma install krdia ha.
//ab bs simple isko require krna h
const chalk = require('chalk');
console.log(chalk.blue.underline.inverse('HELLO NPM'));
console.log(chalk.green.underline.inverse('Success.'));

//validator is use for form validation etc
const validate = require("validator");
const res = validate.isEmail('munsif@gmail.com'); //validated mail
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); //using chalk to beautify the output
const res2 = validate.isEmail('12munsifgmail.com'); //invalidat mail
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2));
//same as ternary operator above
if (res2) {
    console.log(chalk.green.inverse(res2));
} else console.log(chalk.red.inverse(res2));

//  *** PAKAGE.json file ***
//pakage.json apka project ma konsa (dependencies) modeules ya library use horhe h unka track rakhte h
//abhe is project ma 2 moeules h joka dependencies property ma save h (chalk,validator)

//  *** PAKAGE-LOCK.json ***
//pakage-lock.json apka project ma konsa (dependencies) modeules ya library use horhe h unka breif detail rakhte h
//means woh kaha sa arhe h version kya h unka etc ya b object ke formma save hoty h.