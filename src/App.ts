import * as express from "express";
import { Router, Request, Response, Application } from "express";
import Repository from "./modules/repository/RepositoryController";
import Vacancy from "./modules/vacancy/VacancyController";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  private routes(): void {
    const router = Router();
    router.route("/")
    .get((req: Request, res: Response) => {
      res.send("OK");
    });

    const api: Application = express();
    api.use(Repository.baseRoute, Repository.router);
    api.use(Vacancy.baseRoute, Vacancy.router);

    this.express.use("/", router);
    this.express.use("/api", api);
  }

  public listen(): void {
    this.express.listen(process.env.PORT);
    if (process.env.LOGS) console.log(`Server listening port ${process.env.PORT}`);
  }
}

export default new App();
