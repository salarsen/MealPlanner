const express = require('express');
const parser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

const app = express();

const sessionConfig = {
    saveUninitialized : true,
    secret : 'TestSecret',
    resave :  false,
    name : 'session',
    rolling : true,
    cookie : {
        secure : false,
        httpOnly : false,
        maxAge : 360000,
    },
};

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser('sdfdfdfkrn3424n23elfsdfsdllk3'));
app.use(session(sessionConfig));
app.use(expres.static(path.resolve(__dirname, 'dist')));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
