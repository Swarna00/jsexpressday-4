const express = require('express');

const app =express();

//app.use(express.json());
//app.use(express.raw());
//app.use(express.urlencoded());
app.use(express.static(`${_dirname}/public/`,{
    index:'home.html'
}))
app.get('/',(req,res)=>{
    res.send("this is home page");
});

app.get('/home',(req,res)=>{
    res.send("this is home");
});

app.post('/',(req,res)=>{
    //console.log(req.body.name)
    console.log(req.body.toString());

    res.send("this is reg")
})

app.listen(5000,()=>{
    console.log("Server is running");
})
