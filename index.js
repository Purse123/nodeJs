const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New response recived\n`;

    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case '/': 
                res.end("home page");
                break;
            case '/about': 
                const userName = myUrl.query.name;
                res.end(`Hi! ${userName}`);
                break;
            case '/search': 
                const search = myUrl.query.search_query;
                res.end(`result for your search: ${search}`);
                break;
            default: res.end("404 page not found");
        }
    })
})

myServer.listen(8000, ()=> {
    console.log("server is running on port 8000");
    console.log("http://localhost:8000/");
})