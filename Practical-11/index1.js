//Import Express Package
const express = require('express');
const app = express();

app.listen(4000, () =>{
    console.log("Server started at Port: ", 4000);
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/home.html");
});

app.get("/home.html",(req,res)=>{
  res.sendFile(__dirname + "/home.html");
});

app.get("/login.html",(req,res)=>{
  res.sendFile(__dirname + "/login.html");
});

app.get("/about.html",(req,res)=>{
  res.sendFile(__dirname + "/about.html");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login.html', (req, res) => {
    console.log(req.body);
  if (req.body.uname == 'admin' && req.body.pwd == 'man') {
    // to use request.body, you need to import body-parser package
    res.sendFile(__dirname + "/valid.html");
    } else {
      res.sendFile(__dirname + "/invalid.html");
    }
  });

app.use((req, res, next)=>{
  const err = new Error("404 Page Not Found");
  err.status = 404;
  next(err);
}); 

//Error handling middleware
app.use((err,req,res,next)=>{
  res.status(err.status || 500);
  res.send(err.message);
})
