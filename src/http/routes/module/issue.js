const clients = require('restify-clients');


module.exports = function issue(server) {
  server.get('/issues', (req, res, next) => {
    const client = clients.createJsonClient({
      url: 'https://api.github.com/repos/ysouzas/hangout-vagas/issues',
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${process.env.TokenGITHUB}`,
      },
    });
    client.get('', (err, request, response, obj) => {
      res.json(obj);
    });
    next();
  });


  server.post('/issues', (req, res, next) => {
    const client = clients.createJsonClient({
      url: 'https://api.github.com/repos/ysouzas/hangout-vagas/issues',
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${process.env.TokenGITHUB}`,
      },
    });
    client.post('', req.body, (err, request, response, obj) => {
      res.json(obj);
    });
    next();
  });
};
