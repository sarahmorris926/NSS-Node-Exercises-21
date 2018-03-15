 
const express = require('express');
const app = express();
require('dotenv').config();
const { printEgg } = require('./egg.js');

// middleware

app.get('/', (req, res) => {
    res.send(`Welcome to Chickens 'n Eggz!`);
  })
  
  app.use('./public/eggs', printEgg);
  
  app.use(express.static('/public', { extensions: 'html' }));

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ', port);
});