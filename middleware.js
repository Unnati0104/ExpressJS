const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log("Server started at Port: ", 3000);
});

//App Level Middleware
app.use((req,res,next) => {
    // console.log(`Log: ${req.url} ${req.method} ${req.ip} -- ${new Date()} `);
    console.log("This is an App Level Middleware");
    next();
});

app.get("/",(req,res)=>{
    console.log("Home Page");
    res.send("Home Page")
});

app.get("/dashboard",(req,res)=>{
    console.log("Dashboard Page");
    res.send("Dashboard Page")
});

app.get("/user",(req,res)=>{
    console.log("User Page");
    res.send("User Page")
});