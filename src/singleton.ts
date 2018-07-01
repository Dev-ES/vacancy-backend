
class MinhaClasseSingleton {
  private static instance: MinhaClasseSingleton;
  public string: string;

  private constructor(string: string) {
    this.string = string;
  }

  public static getInstance(): MinhaClasseSingleton {
    if (this.instance == undefined) {
      this.instance = new MinhaClasseSingleton("sou um singleton");
    }
    return this.instance;
  }
}

export default MinhaClasseSingleton.getInstance();
