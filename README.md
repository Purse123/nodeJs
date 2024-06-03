<h1>Express</h1>
<hr/>
<h2>To import modules:</h2>
npm i express

const express = require('express');
const app = express();

*this app is handler function for express*

app.listen(8000, () => {console.log("http://localhost:8000/");})
<hr/>
<h2>Working with url</h2>

> syntax: app.METHOD(path, handlerFunction);

app.get("/", (req, res) => {
    res.send("home page");
})
app.get("/about", (req, res) => {
    res.send("about page");
})
