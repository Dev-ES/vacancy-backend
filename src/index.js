import express from 'express';
import Server from './lib/server';

const hostname = 'localhost';
const port = process.env.PORT || 3000;

var app = express();

app.get("/", (req, res) => {
  res.status = 200;
  res.send("OK");
});

app.listen(port);
