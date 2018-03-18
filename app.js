 
const express = require('express');
const app = express();
const middleware = require('./egg.js');


// middleware
app.use('/farm', middleware)
  

// error handling
app.use((req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

app.use( (err, req, res, next) => {
    res.status(err.status || 500)
    res.send('<h1>No farm animals here, try again!</h1>')
});


// server stuff
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ', port);
});