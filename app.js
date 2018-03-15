const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/');

// middleware

app.use("/", routes);

// error handling
app.use((req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

// custom error handler at bottom
app.use( (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: "Error error error!",
        err: err.message
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on port ', port);
});