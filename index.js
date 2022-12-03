const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan')
const todoRouters = require('./route/todo')

app.use(express.json())
app.use(morgan("dev"))

//  --------------------------------- main route setup ---------------------------------
app.use("/api/", todoRouters);

//  --------------------------------- app listen & database setup  ---------------------------------
app.listen(process.env.PORT || 5000, async () => {
    mongoose.connect(
        `mongodb+srv://any:123@cluster0.enu0ktw.mongodb.net/racrepair?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
    }
    ).then(conn => {
        console.log(`Database Connected (${conn.connection.name}): ${conn.connection.host}`)
        console.log(`Server is running on PORT: ${5000} url on mode ${process.env.NODE_ENV}`);
    }).catch(err => {
        console.log(`Error: ${err.message}`);
        console.log(`Database not Connected`);
    });
});