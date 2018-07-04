import Vacancy from "./Vacancy";
import GitHubHandler from "./../utils/GitHubHandler";

class VacancyDAOGitHub {
  private gitHubHandler: GitHubHandler;

  constructor() {
    this.gitHubHandler = GitHubHandler.getInstance();
    console.log(this.gitHubHandler.getGitHub());
  }

}

export default VacancyDAOGitHub;
