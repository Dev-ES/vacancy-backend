import { Client, QueryResult } from "pg";

/* Class: PostgreSQL
 * - Implements Singleton.
 * - Connect and handle a PostgreSQL database.
 * - Requires that the environment variables be defined.
 */

class PostgreSQL {
  private static instance: PostgreSQL;

  private client: Client;
  private connected: boolean;
  private jobs: number;

  private constructor() {
    this.client = new Client();
    this.connected = false;
    this.jobs = 0;
  }

  public static getInstance(): PostgreSQL {
    if (this.instance === undefined) {
      this.instance = new PostgreSQL();
    }
    return this.instance;
  }

  private async connect(): Promise<void> {
    if (this.connected) {
      return;
    }

    try {
      await this.client.connect();
      this.connected = true;
      if (process.env.LOGS) console.log("PGSQL: cliente conectado");
    } catch (error) {
      throw new Error(error);
    } finally {
      return;
    }
  }

  private async disconnect(): Promise<void> {
    await this.client.end();
    this.connected = false;
    if (process.env.LOGS) console.log("PGSQL: cliente desconectado");
    return;
  }

  public async executeQuery(queryStream: string): Promise<QueryResult> {
    if (!this.connected) {
      await this.connect();
    }
    this.incrementJob();

    let result: QueryResult;

    try {
      result = await this.client.query(queryStream);
      if (process.env.LOGS) console.log(`PGSQL: resultado da query: ${queryStream}`, result);
    } catch (error) {
      throw new Error(error);
    } finally {
      this.decrementJob();
      return result;
    }
  }

  private incrementJob(): void {
    this.jobs += 1;
  }

  private async decrementJob(): Promise<void> {
    this.jobs -= 1;
    if (this.jobs == 0) {
      await this.disconnect();
    }
  }
}

export default PostgreSQL;
