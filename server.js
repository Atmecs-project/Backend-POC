const express = require('express');
const router = require("./routes/employee-route");
const theme_router = require("./routes/theme_route");
const layout_router = require("./routes/theme_layout");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware (Routes)
// app.use('/',(req,res,next)=>{
//     res.send("Connected to MongoDb Databse successfully");
// })
app.use(cors());
app.use(express.json());
app.use("/employees", router); // http://localhost:5000/employees
app.use("/themes", theme_router); // http://localhost:5000/themes
app.use("/layouts", layout_router); // http://localhost:5000/themes

mongoose.connect("mongodb+srv://admin:7fS6j09ejQUGJKtc@cluster0.oflgh7s.mongodb.net/employee_db?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB Database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));




// DB : employee_db
// username : admin
// password : 7fS6j09ejQUGJKtc
// mongodb+srv://admin:<password>@cluster0.oflgh7s.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://admin:7fS6j09ejQUGJKtc@cluster0.oflgh7s.mongodb.net/employee_db?retryWrites=true&w=majority




