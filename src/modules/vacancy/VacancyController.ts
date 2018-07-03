import * as express from "express";
import Service from "./VacancyService";

class VacancyController {
  router: express.Router;
  readonly baseRoute: string = "/vacancy";

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  routes(): void {
    this.router.route("/")
    .get( (req, res) => {
      const json = {
        "id": 8,
        "title": "testeVaga",
        "benefits": [
          {
            "id": undefined,
            "name": "Alelo Refeição",
            "value": 200.00
          },
          {
            "id": 555,
            "name": "Plano Unimed",
            "value": undefined
          }
        ]
      };
      Service.newVacancy(json);
      res.send("Ok");
    });
  }
}

export default new VacancyController();
