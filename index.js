const http = require('http');
const express = require('express');
const app = express();
// const fs = require('fs');
// const url = require('url');

app.get("/", (req, res) => {
    res.send("home page");
})
app.get("/about", (req, res) => {
    res.send("about page");
})
app.get("/contact", (req, res) => {
    res.send("contact page");
})

// function handler (req, res) {
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.url} New response recived\n`;

//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl);
    
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myUrl.pathname) {
//             case '/': 
//                 res.end("home page");
//                 break;
//             case '/about': 
//                 const userName = myUrl.query.name;
//                 res.end(`Hi! ${userName}`);
//                 break;
//             case '/search': 
//                 const search = myUrl.query.search_query;
//                 res.end(`result for your search: ${search}`);
//                 break;
//             case '/signup':
//                 if(req.method === "GET") {
//                     res.end("this is a signup form");
//                 }
//                 else if(req.method === "POST") {
//                     // DB QUERIES
//                     res.end("Success")
//                 }
//                 break;
//             default: res.end("404 page not found");
//         }
//     })
// }

const myServer = http.createServer(app);

myServer.listen(8000, ()=> {
    console.log("server is running on port 8000");
    console.log("http://localhost:8000/");
})