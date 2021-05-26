//Import Express Package
var express = require('express');
var app = express();

//Create root URL
// app.get('/', function(req, res){
//     res.send('Hello world');
// })

//Start application at PORT 3000
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () =>{
    console.log("Server started at Port: ", PORT);
});

app.get('/', function(req, res) {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.query);
    // console.log(req.body);
    // res.send('This is Express Server using Nodemon');
    res.sendFile(__dirname + '/login.html');
});

// app.get('/login.html', (req, res) => {
//     if (req.query.uname == 'admin' && req.query.pwd == '123') {
//         res.send('Successful Login');
//     } else {
//         res.send('Invalid Login');
//     }
// });

//body-parser
// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
