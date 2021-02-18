const express = require('express');
const session = require('cookie-session');
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');

// Express app
const app = express();

// Security Configs
app.use(helmet());
app.use(hpp());

// Cookie Settings
app.use(
  session({
    name: 'session',
    secret: 'secretKey',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);

app.use(csurf());
app.use(limiter);

app.listen(8080, () => {
  console.log("The server is live!")
});

module.exports = app;