import http from 'http';

export default class Server {
  
  constructor(_hostname, _port) {
    this.hostname = _hostname;
    this.port = _port;
  }
  
  start(_callback) {
    this.httpInstance = http.createServer(_callback);
    this.listen();
  }
  
  listen(_callback) {
    let callback = _callback ? _callback : () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    };
    this.httpInstance.listen(this.port, this.hostname, callback);
  }
}
