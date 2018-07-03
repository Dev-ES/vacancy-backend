require("dotenv-safe").config();
import { Client, QueryResult } from "pg";

/* Class: PostgreSQL
 * - Implements Singleton.
 * - Connect and handle a PostgreSQL database.
 * - Requires that the environment variables be defined.
 */

class PostgreSQL {
  private static instance: PostgreSQL;

  public static getInstance(): PostgreSQL {
    if (this.instance === undefined) {
      this.instance = new PostgreSQL();
    }
    return this.instance;
  }

  private async connect(client: Client): Promise<void> {
    try {
      await client.connect();
      if (process.env.PGLOGS) console.log("PGSQL: cliente conectado");
    } catch (error) {
      console.log("PGSQL: Falha ao conectar à base de dados\n", error);
    } finally {
      return;
    }
  }

  private async disconnect(client: Client): Promise<void> {
    try {
      await client.end();
      if (process.env.PGLOGS) console.log("PGSQL: cliente desconectado");
    } catch (error) {
      console.log("PGSQL: Falha ao desconectar da base de dados\n", error);
    } finally {
      return;
    }
  }

  public async executeQuery(queryStream: string): Promise<QueryResult> {
    const client: Client = new Client();
    await this.connect(client);

    let result: QueryResult;

    try {
      result = await client.query(queryStream);
      if (process.env.PGLOGS) console.log(`PGSQL: resultado da query: ${queryStream}\n`, result);
    } catch (error) {
      if (process.env.PGLOGS) console.log(`PGSQL: Falha ao executar Query ${queryStream}\n`, error);
      /* result === undefined */
    } finally {
      await this.disconnect(client);
      return result;
    }
  }
}

export default PostgreSQL;
