
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//set the static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user',(req, res) => {
    let users = [
        {
            firstName : "Mr A",
            lastName : ".A",
            age : 23,
            gender: 'Male'
        },
        {
            firstName: "Mr B",
            lastName : ".B",
            age: 21,
            gender: "Male"
        },{
            first : "Ms C",
            lastName : ".c",
            age : 87,
            gender: "Female"
        }
    ];
    res.json(users);
});

app.get('/download', (req, res)=>{
    res.download(path.join(__dirname, '/download/file.txt'));
});

app.get('/about', (req, res)=>{
    //specify the directory in locally
    res.redirect('/about.html'); 
});

post (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send({
        message: "User : " + name + " that has age of : " + age
    });
    console.log(true);
}
require('./routes')(app)
app.listen(300, ()=>{
    console.log("Running on port: 300");
})