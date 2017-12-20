const issue = require('./module/issue');


const routes = (server) => {
  issue(server);
};

module.exports = routes;
