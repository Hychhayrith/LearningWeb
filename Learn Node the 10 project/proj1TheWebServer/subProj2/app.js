const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
});
const hostname = "127.0.0.1";

app.get('/', (req, res)=>{
    res.send({
        status: 200,
        message: "This is Homepage."
    })
});

app.get('/about', (req, res) => {
    res.send({
        status: 200,
        message: "This is from about page."
    })
});

app.get('/users/:name', (req, res) => {
    res.send({
        status: 200,
        name: "The user have input name: " + req.params.name
    })
})

//Using server address like this: 
// port number must come first
app.listen(2000, ()=>{
    console.log("The server running ");
});