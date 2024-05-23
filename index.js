const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New response recived\n`

    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url) {
            case '/': res.end("home page");
            break;
            case '/about': res.end("I am purse");
            break;
            default: res.end("404 page not found")
        }
    })
})
myServer.listen(8000, ()=> {
    console.log("server is running on port 8000");
})