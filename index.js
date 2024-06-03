const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("home page");
})
app.get("/about", (req, res) => {
    res.send("about page");
})
app.get("/contact", (req, res) => {
    res.send("contact page");
})


app.listen(8000, ()=> {
    console.log("http://localhost:8000/");
})