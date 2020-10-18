// 1 : in node js every individual file is a modeule so we must have
// to import it before using its functionalities.
// 2 : har modeules ma funtions or veriables private hoty h jabtak
//unko public na keya jai dusry modeules unko access nhi karsakty. 
const add = (a, b) => {

    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
const name = "munsif";
//function or variable ko public krny k leya.
// IMP agr koi single element export krna hoto simple module.export=elementName
//agr multiValues hoto module.exports.eleName=elename;
//IMP : Object return hoga agr multiValues return horhe h to
module.exports.name = name;
module.exports.add = add;
//agr modeule .exports apko bar bar nhi likhna to ap object return krwado
module.exports = {
    name,
    add,
    sub,
    mul,
    div
};