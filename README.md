npm init        -> to initialize node package json file

"scripts": {
    "start": "node index"
},              -> npm start to run

<hr/>
<hr/>
<h2>To import modules:</h2>
const fs = require('fs');       -> fs = file system

//write mode
fs.writeFile("./log.txt", "helloWorld", (err) => {err});
fs.writeFileSync("./log.txt", "helloWorld");

//read mode
fs.readFile("./log.txt", "utf-8", (err, result) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});
fs.readFileSync("./log.txt", "utf-8");
<hr/>
<hr/>
<h2>Working with http</h2>

const http = require('http');

const myServer = http.createServer((req, res) => {
    res.end("msg from server");
});

myServer.listen(8000, () => {
    console.log("server is running on port 8000");
})
<hr/>
<hr/>
<h2>Working with URL package</h2>
<b>Setup: </b>
npm i url
const url = require('url');

// URL package help seperate url into different package
*/about?name=pierce&age=20

const myUrl = url.parse(req.url, true);
@param urlString —> The URL string to parse.
@param parseQueryString -> If true it handle query parameter

if false:
query: name=pierce&age=20

if true:
query: {name='pierce', age='20'}
<hr/>
program:
<br/>
switch(myUrl.pathname) {<br/>
    case '/search': <br/>
        const search = myUrl.query.search_query;<br/>
        res.end(`result for your search: ${search}`);<br/>
    break;<br/>
}<br/>