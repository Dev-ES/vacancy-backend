import * as express from 'express';
import { Request, Response } from 'express';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  routes(): void {
    let router = express.Router();
    router.route("/")
    .get((req: Request, res: Response) => {
      res.send("OK");
    });

    this.express.use("/", router);
  }
}

export default new App();
