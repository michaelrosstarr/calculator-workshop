import { sql } from "@vercel/postgres";
import Calculator from "./components/calculator";

export const metadata = {
  title: "Calculator",
};

export default async function Page() {

  const { rows } = await sql`SELECT * from calculations`

  const addEntry = async (first: string, second: string, answer: string, type: string) => {
    'use server'
    const client = await sql.connect();
    const query = `INSERT INTO calculations (first, second, answer, type) VALUES ($1, $2, $3, $4)`;
    const values = [first, second, answer, type];
    await client.query(query, values);
    const { rows } = await client.sql`SELECT * from calculations`
    client.release();
    return rows;
  }

  return <Calculator rows={rows} add={addEntry} />
}
