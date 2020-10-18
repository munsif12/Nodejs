const fs = require('fs');

//SYNC FILE EXAMPLE 
//sync Accepts single request at a time 
console.log(' ================= SYNC FILE ===================== ');
const aSyncData = fs.readFileSync('readme.txt', 'UTF-8');
console.log(aSyncData);
//sync file uswqt tak ya console print nhi kry ge jab tak woh file ma sa data
//pura na utha la sync 1 waqt ma 1 task complete krta ha 
console.log('SYNC FILE TESTING ');

console.log(' ');
console.log(' ================= ASYNC FILE ===================== ');

//ASYNC FILE EXAMPLE
//Async Acepts multiple requests at a time.
fs.readFile('readme.txt', 'UTF-8', (err, data) => {
    console.log(data);
});
//is example ma ya console phly print ho jai ga q ka ASYNC multiple request ko accept
//krta h jabtak 1 ka kam complete hota h tab tak ya dure request accept krsakta h
console.log('ASYNC FILE TESTING');