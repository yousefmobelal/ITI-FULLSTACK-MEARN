let express = require("express");
let app = express();
app.get("/",(req,res)=>{
    res.status(200).send("hello world")
})
let server = app.listen(2000);
module.exports = server;