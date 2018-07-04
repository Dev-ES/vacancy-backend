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
    /* GET /repository
     * Retorna todos os repositórios
     */
    .get(async (req: Request, res: Response) => {
      const data = await Service.getAllRepository();
      res.json(data);
    })
    /* POST /repository
     * Cria um novo repositório
     */
    .post((req: Request, res: Response) => {
      const data = req.body;
      Service.newRepository(data);
      res.json({});
    });

    this.router.route("/:id")
    /* GET /repository/:id
     * Retorna os dados de um único repositório
     */
    .get(async (req: Request, res: Response) => {
      res.send("TO DO: Implementar busca de um repositório");
    });
  }
}

export default new RepositoryController();
