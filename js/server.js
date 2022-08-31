const { resolveMx } = require('dns');
const express = require('express')
const app = express();
const port = 3000
app.listen(port,()=>{
    console.log('app running"')
})
app.get('/products',(req,res)=>{
    res.send('')
})