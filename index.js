const express = require('express');
const controller = require('./controllers/controller');
const parser = require('body-parser');
const logger = require("morgan");
const cors = require('cors');

// instantiate express
const app = express();

//middleware configuration

// converts a json string to the an object and attaches it to req.body
app.use(
    parser.urlencoded({
        extended: true
    })
);

// converts a json string to the an object and attaches it to req.body
app.use(parser.json());

// cors allows connections from all domains
app.use(cors());

// hands off requests on the '/api/users' route to the users controller
app.use('/', controller);

//for test logging
app.use(logger("dev"));

/// for the connection

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});