import express from 'express';

const port = process.env.PORT || 8080;

var app = express();

app.get("/", (req, res) => {
  res.status = 200;
  res.send("OK");
});

app.listen(port);
