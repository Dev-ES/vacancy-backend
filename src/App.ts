import * as express from "express";
import { Request, Response, Application } from "express";
import Repository from "./modules/repository/RepositoryController";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  private routes(): void {
    const router = express.Router();
    router.route("/")
    .get((req: Request, res: Response) => {
      res.send("OK");
    });

    this.express.use("/", router);
    this.express.use(Repository.baseRoute, Repository.router);
  }

  public listen(): void {
    this.express.listen(process.env.PORT);
    if (process.env.LOGS) console.log(`Server listening port ${process.env.PORT}`);
  }
}

export default new App();
