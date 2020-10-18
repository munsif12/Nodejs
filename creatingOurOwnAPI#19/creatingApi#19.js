// what is API => 1 service jaha sa ap data ka request krsakty ho. 
//to create our own API just write filename.json and put some data into it like i created userApi.json
//api is always created in json format so write a file userApi.json and wite some data into it
//api 1 aisa Json page h jima data para hota h json format ma hamy usy call krna h bs.
/*
 REMEMBER API IS ALWAYS INJSON FORMAT 
 
 */
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    //if we want to load our api data once then use Syncfs 
    const syncData = fs.readFileSync("userApi.json", "utf-8");
    const syncObjData = JSON.parse(syncData);
    //ag ham chahty ha ka page pa sirf 1 bar data show ho to Sync (SyncPageData) use kro wrna Async(AsyncPageData)
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write('<h1 style=text-align:center;> WELCOME TO HOME PAGE  <br></h1>');
        res.write('<h3 style=text-align:center;> Pages present in this server  <br></h5>');
        res.write('<h5 style=text-align:center;> 1 : /syncPageData   <br> Copy this to url => localhost:8000/syncPageData<br></h5>');
        res.write('<h5 style=text-align:center;> 2 : /AsyncPageData  <br> Copy this to url => localhost:8000/AsyncPageData  <br></h5>');
        res.end();
    }
    else if (req.url === "/syncPageData") {
        res.write('<h1 style=text-align:center;> WELCOME TO SyncPageData PAGE  <br></h1>');
        res.writeHead(200, { "content-type": "application/json" });
        res.write(syncData);//Showing JSON data on application/JSON page
        res.write(syncObjData.StudentMunsif.name);//showing JS data 
        res.end();
    }
    else if (req.url === "/AsyncPageData") {
        /*${__dirname}/creatingOurOwnAPI#19/ */
        fs.readFile("userApi.json", "utf-8", (err, data) => {
            res.writeHead(200, { "content-type": "application/json" });// text/html agr con-typ ya hoga to data hamy html form ma mily ga
            const JsData = JSON.parse(data);
            //destructuring nested objects
            const { StudentMunsif: { name, degree, age, cgpa, sportsBg: { pro, medels } } } = JsData;
            //res.write('USER DATA PAGE')
            //res.write(JsData.StudentMunsif.degree);
            console.log(JsData);//Showing JS data on JS page
            //you cant write jsData to json like
            res.write(data);//Showing JSON data on application/JSON page
            res.write(' To access specific data :=> ');
            res.write(` NAME : ${name},  DEGREE : ${degree},  AGE : ${age}, CGPA ARRAY : ${cgpa},  FAVOURITE SPORT : ${pro},  MEDELS ACHIEVED : ${medels}`);
            res.end();
        });
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1 style=color:red; text-align:center;> 404 ERROR <br>PAGE NOT FOUND</h1>");
        res.end();
    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('listenting');
});
