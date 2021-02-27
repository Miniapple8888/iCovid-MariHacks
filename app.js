const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200,
    credentials: true,
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