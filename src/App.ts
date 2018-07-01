import * as express from "express";
import { Request, Response } from "express";
import Repository from "./modules/repository/RepositoryController";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  routes(): void {
    const router = express.Router();
    router.route("/")
    .get((req: Request, res: Response) => {
      res.send("OK");
    });

    this.express.use("/", router);
    this.express.use(Repository.baseRoute, Repository.router);
  }
}

export default new App();
