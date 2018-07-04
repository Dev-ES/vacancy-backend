import Vacancy from "./Vacancy";
import GitHubHandler from "./../../utils/GitHubHandler";

class VacancyDAOGitHub {
  private gitHubHandler: GitHubHandler;

  constructor() {
    this.gitHubHandler = GitHubHandler.getInstance();
    console.log(this.gitHubHandler.getGitHub());
  }

  public insertVacancy(vacancy: Vacancy) {
    const issue: any = {};
    issue.title = vacancy["title"];
    const attributes = (Object.getOwnPropertyNames(vacancy));
    let body: string = "";

    attributes.map( (att) => {
      if ( (vacancy[att] != undefined && att != "id" ) ) {
        if (!(Array.isArray(vacancy[att]))) {
          if (vacancy[att].id != undefined) {
            body += "<h3>" + att + "</h3>" +
            "<p>" + vacancy[att].name + "</p>";
          } else {
            body += "<h3>" + att + "</h3>" +
            "<p>" + vacancy[att] + "<p/>";
          }
        }
      }
    });

    issue["body"] = body;
    this.gitHubHandler.createIssue(issue, "joseslima/teste-vagas");
  }
}

export default VacancyDAOGitHub;
