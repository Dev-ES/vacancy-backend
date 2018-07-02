import * as express from "express";
import GitHub from "github-api";

class GitHubHandler {
  private static instance: GitHubHandler;
  private gitHub: GitHub;

  private constructor() {
    const GitHub = require("github-api");
    this.gitHub = new GitHub({
      username: "joseslima",
      password: "Hxptoxpte.1"
    });
  }
  public static getInstance(): GitHubHandler {
    if (this.instance == undefined) {
      this.instance = new GitHubHandler();
    }
    return this.instance;
  }
  public teste(): string {
    return(this.gitHub);
  }
  public async createIssue(data , repo): boolean {
    const repository: any = repo.split("/");
    const user: string = repository[0];
    const repositoryName: string = repository[1];
    const Issue: any = (this.gitHub.getIssues(user , repositoryName));
    try {
      await Issue.createIssue(data);
      return true;
    } catch (error) {
      throw(error);
      return false;
    }
  }
}

export default GitHubHandler.getInstance();
