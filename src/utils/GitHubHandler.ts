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
  public getGitHub(): string {
    return(this.gitHub);
  }
  public newIssue(repo): any {
    const repository: any = repo.split("/");
    const user: string = repository[0];
    const repositoryName: string = repository[1];
    return (this.gitHub.getIssues(user , repositoryName));
  }
  public  async createIssue(data , repo): Promise<boolean> {
    const Issue: any = this.newIssue(repo);
    try {
        return await Issue.createIssue(data);
        return true;
    } catch (error) {
      throw(error);
      return false;
    }
  }
  public async editIssue(issueNumber , issueData , repo): Promise<boolean> {
    const Issue: any = this.newIssue(repo);
    try {
      await Issue.editIssue(issueNumber , issueData);
      return true;
    } catch (error) {
      throw(error);
      return false;
    }
  }
  public async comentIssue(issueNumber, comment , repo): Promise<boolean> {
    const Issue: any = this.newIssue(repo);
    try {
      await Issue.createIssueComment(issueNumber , comment);
      return true;
    } catch (error) {
      throw (error);
      return false;
    }
  }
  public async listComents(issueNumber , repo): Promise<any> {
    const Issue: any = this.newIssue(repo);
    try {
      const listComments = await Issue.listIssueComments(issueNumber);
      console.log(listComments.data);
      return listComments.data;
    } catch (error) {
      throw (error);
      return undefined;
    }
  }
  public async editComment(id, comment, repo): Promise<boolean> {
    const Issue: any = this.newIssue(repo);
    try {
      await Issue.editIssueComment(id, comment);
      return true;
    } catch (error) {
      throw (error);
      return undefined;
    }
  }
}

export default GitHubHandler.getInstance();
