//streamingYt ke ander jo code likha h stream read krna k
//leya uske jaga ham STREAM.PIPE ka method use krka one line of code ma krsakty h

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
    //     const readStream = fs.createReadStream('dummyText.txt');
    //     readStream.on("data", (recievingChunkData) => {
    //         res.write(recievingChunkData);
    //     });
    //     readStream.on("end", () => {
    //         res.end();
    //     });
    //     readStream.on("error", (err) => {
    //         console.log(err);
    //         res.write("file not found")
    //     });
    const Streampipe = fs.createReadStream('dummyText.txt');
    Streampipe.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listenting to port 8000');
})
