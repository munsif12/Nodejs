//TO use HTTP server we must have to require the http modeule.
const http = require('http');
//responsing back to the webpage with the msg written inside res.end()
//agr server create hojata h to response do
const server = http.createServer((req, res) => {
    res.end('Hello from munsif this is web server');
});
//listening to the request by the user
// use unused ports like 3000 ,8000
//to see ports use netstat -a,-n,-o
server.listen(8000, "127.0.0.1",/*localhost=> 127.0.0.1 */() => {
    console.log('listening to port no 8000');
});