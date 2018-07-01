import * as express from "express";
import Service from "./RepositoryService";

class RepositoryController {
  baseRoute: string;
  router: express.Router;

  constructor() {
    this.baseRoute = "/repository";
    this.router = express.Router();
    this.routes();
  }

  routes(): void {
    this.router.route("/")
    .get((req, res) => {
      const data = Service.getAllRepository();
      res.send(data);
    })
    .post((req, res) => {
      const data = req.body;
      Service.newRepository(data);
      res.send("OK");
    });
  }
}

export default new RepositoryController();
