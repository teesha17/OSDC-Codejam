const express = require("express");
const app = express();

const cors = require("cors");

app.get("/",(req,res)=>{
    return res.json("hiiii there");
})

app.listen(4000, () => console.log("lisitening to port 4000"));
