var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345"
});
con.connect(function (err) {
    if (err) { console.log(err) };
    console.log("Connected!");
    con.query("CREATE DATABASE javatpoint", function (err, result) {
        if (err) { console.log(err) };
        console.log("Database created");
    });
});
// var values = [1, 2, 3, 4, 5, 6];
// values.forEach(function (b, i) {
//     values.push(
//         {
//             'Symbol': b.a,
//             'BID': b.b,
//             'CONVERT1': b.c,
//             'Buy': b.d,
//             'Sell': b.e,
//             'Convert2': b.f
//         });
// });