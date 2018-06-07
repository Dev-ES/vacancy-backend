import express from 'express';
import Server from './lib/server';

const hostname = 'localhost';
const port = 3000;

var app = express();

app.get("/", (req, res) => {
  res.status = 200;
  res.send("OK");
});

var server = new Server(hostname,port);
server.start(app);
