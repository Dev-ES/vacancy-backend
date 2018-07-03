import * as express from "express";
import { Router, Request, Response, Application } from "express";
import Repository from "./modules/repository/RepositoryController";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  // atribui as rotas ao App
  private routes(): void {
    /*
     * Configurar API
     */
    const api: Application = express();
    api.use(Repository.baseRoute, Repository.router);

    /*
     * Configurar App
     */
    this.express.get("/", (req: Request, res: Response) => {
      res.send("OK");
    });
    this.express.use("/api", api);
  }

  // inicia o App
  public listen(): void {
    this.express.listen(process.env.PORT);
    if (process.env.LOGS) console.log(`Server listening port ${process.env.PORT}`);
  }
}

export default new App();
