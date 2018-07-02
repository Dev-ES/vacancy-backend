import * as express from "express";
import { Router, Request, Response } from "express";
import Service from "./RepositoryService";

class RepositoryController {
  readonly baseRoute: string = "/repository";
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.route("/")
    // GET /repository
    .get((req: Request, res: Response) => {
      const data = Service.getAllRepository();
      res.send(data);
    })
    // POST /repository
    .post((req: Request, res: Response) => {
      const data = req.body;
      Service.newRepository(data);
      res.send("OK");
    });
  }
}

export default new RepositoryController();
