const express = require('express')
const app = express();
const port = process.env.PORT || 2000

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})

app.get("/",(req,resp)=>{
    resp.json({"msg":"Hello heroku and git also"})
})

app.get("/login",(req,resp)=>{
    resp.send("Login successfully")
})