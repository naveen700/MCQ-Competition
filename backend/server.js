const express = require("express");
const appRoutes = require("./routes/routes");
const bodyParser = require('body-parser');
const app = express();


// to parse the json data
app.use(bodyParser.json())

//  to handle cors issue
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//  defining the routes here
app.use("/quiz", appRoutes);

//  this is to handle error
app.use((error, req, res, next) => {
  const msg = error.message
  res.status(500).send(msg)
});


//  listening to the server.
app.listen(8080,()=>{
  console.log('Incoming request at 8080');
});
