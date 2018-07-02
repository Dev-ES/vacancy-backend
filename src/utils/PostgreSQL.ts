import { Client, QueryResult, Connection } from "pg";
import { throws } from "assert";

/* Class: PostgreSQL
 * - Connect and handle a PostgreSQL database.
 * - Requires that the environment variables be defined.
 */

class PostgreSQL {
  private static instance: PostgreSQL;
  private jobs: number;

  private connectionString: string;
  private client: Client;
  private connected: boolean;

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
      throws(error);
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

  public async executeQuery(queryStream: string): Promise<any[]> {
    if (!this.connected) {
      await this.connect();
    }

    let result: QueryResult;

    try {
      result = await this.client.query(queryStream);
      if (process.env.LOGS) console.log(`PGSQL: resultado da query: ${queryStream}`, result);
    } catch (error) {
      throws(error);
    } finally {
      await this.disconnect();
      return result.rows;
    }
  }
}

export default PostgreSQL;
