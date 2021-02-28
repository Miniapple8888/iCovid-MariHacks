const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(cookieParser());
//let origin = 'https://unruffled-keller-faf15c.netlify.app/';
// if it's not in production
if (process.env.NODE_ENV === 'development') {
  console.log("I am executed!");
  //origin = 'http://localhost:8081';
} else {
  console.log(process.env.NODE_ENV);
}

const corsOptions = {
    //origin: origin,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Main routing
require('./routes')(app);

// Running app
const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log("App is running.");
});

module.exports = {app}