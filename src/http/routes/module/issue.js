const clients = require('restify-clients');


module.exports = function issue(server) {
  server.get('/issues', (req, res, next) => {
    const client = clients.createJsonClient({
      url: process.env.URL,
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${process.env.TOKENGITHUB}`,
      },
    });
    client.get('', (err, request, response, obj) => {
      res.json(obj);
    });
    next();
  });


  server.post('/issues', (req, res, next) => {
    const client = clients.createJsonClient({
      url: process.env.URL,
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${process.env.TOKENGITHUB}`,
      },
    });
    client.post('', req.body, (err, request, response, obj) => {
      res.json(obj);
    });
    next();
  });
};
