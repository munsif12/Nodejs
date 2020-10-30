/* What is Stream ?
 Streams are onjects that let you read data from a sourse
 or write data to a destiination in continues fashion .
 Streaming means listening to a music or watching cedio in "real time"
 instead of downloading a file to your computer
  Four types of Stream
  1 Readable => Stream which is uesed for read opertion
  2 Writable => Stream which is uesed for write opertion
  3 Duplex => Stream which is uesed for  both write& read opertion
  4 Transform=> A type of duplex stream where the output is computed based on input.
*/
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    //fs.readFile safile 1 dafa complete load hote ha or then data hamy
    //milta ha hamy aisa nhi chaheya hamy data sath sath stream yani chunks 
    //ma zarurat ha 

    //1st method
    // fs.readFile('dummyText.txt', "utf-8", (err, data) => {
    //     if (err) return console.log(err);
    //     res.write(data)
    //     res.end();
    // });

    // Stream events
    // 1 data - the event is fired when data is available to read
    // 2 End - the event is fired when there is no more data to read
    // 3 error - the evevnt id fired when there is any data recieving or writing
    //SoLUTION
    // 2nd way
    //create a readablestream
    // jandle streamEvents --> DataCue,end,error
    const readStream = fs.createReadStream('dummyText.txt');
    readStream.on("data", (recievingChunkData) => {//data=> untill data is comming 
        res.write(recievingChunkData);
    });
    readStream.on("end", () => {//end=> when data is no more
        res.end();
    });
    readStream.on("error", (err) => { //error=>if there is any error
        console.log(err);
        res.write("file not found")
    });
});
server.listen(8000, '127.0.0.1', () => {
    console.log('listenting to port 8000');
})
