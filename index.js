const express = require('express');


const app = express();



app.get('/home',(req,res)=>{
  //console.log(res.headersSent)
//  res.set('Content-Type','text/plain')
  //console.log(res.get('Content-Type'))
  //res.send('Home Page')

  // res.json({name:'swarna '})
  //  console.log(res.headersSent)
  res.format({
    'text/plain':function(){
      res.send('hey plain')
    },
    'text/html':function(){
      res.send('<p>hey html</p>')
    },
    'application/json':function(){
      res.send({ message:'hey'})
    },
    default:function(){
      res.status(406).send('Not Acceptable')
    }
  })
})


app.listen(5000,()=>{
  console.log("server running.....")
})