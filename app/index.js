const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('<h1 style="color: blue; text-align: center">Express App<h1>');
});

http.createServer(app).listen(3000);
