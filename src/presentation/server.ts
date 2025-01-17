import express from "express";

interface Options {
  port: number;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  constructor(options: Options) {
    const { port = 3100 } = options;

  }
  async start() {
    this.app.listen(3000, () => {
      console.log(`Server running on port ${ this.port }`);
    });
  }
}
