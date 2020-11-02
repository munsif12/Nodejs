const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    //server pa user request krrha h kisi page ke (http://localhost:8000/pubgUnban) pubgUnban console ma print hoga
    // console.log(req.url);
    if (req.url == '/') { /*age koi request arhe h url pa with page name to redirect krdo uspage pa else 404 */

        res.writeHead(200, { 'Content-Type': 'text/html' });//to set the header page.
        //res.write(req.url);//kis page ke request hui h
        res.write('requested page : ' + req.url + ' ' + '   Method :' + req.method);
        res.end('<h1>welcome to the home page</h1>');
    }
    else if (req.url == '/contect') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write(req.url);//kis page ke request hui h
        res.write('requested page : ' + req.url + ' ' + ' Method :' + req.method);
        res.end('<h1>welcome to the Contect page</h1> ');
    }
    //from w3schools
    else if (req.url == '/checkAddress') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.end(txt);
    }
    //ends here
    else {
        /*page status code add krna lazmii h like 200 for sucess and 404 for error*/
        //to tell user its a client error page (inpect the page and goto network page and see the error code)
        // IMPORTANT
        /*If the response from the HTTP server is supposed to be displayed as HTML,
        you should include an HTTPheader with the correct content type:
        (res.writeHead(404, { "Content-type": "text/html " })  */
        res.write('requested page : ' + req.url + ' ' + ' Method :' + req.method);
        res.writeHead(404, { "Content-type": "text/html " });
        res.end(' <h1>404 requested page not found</h1> ');

    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('running server on port no 8000 !');
});