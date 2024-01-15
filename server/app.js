// const express = require("express");
// const app = express();

// const cors = require("cors");
// const {default : mongoose} = require("mongoose");

// //app.use(cors({origin : true}))

// app.get("/",(req,res)=>{
//     return res.json("hiiii there");
// })


// mongoose.connect("mongodb+srv://admin:admin@cluster0.tgos2xj.mongodb.net/",{useNewUrlParser : true,useUnifiedTopology: true });
// mongoose.connection
// .once("open",()=>console.log("connected"))
// .on("error",(error)=>{
//     console.log(`ERROR:${error}`);
// })

// app.listen(4000, () => console.log("lisitening to port 4000"));



const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);


mongoose.connect("mongodb+srv://teeshakakkar2004:UK2G1Z3djIVqzwYo@cluster0.qyskobv.mongodb.net/", { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

app.listen(4000, () => console.log("lisitening to port 4000"));

