// database.ts
import { sql } from '@vercel/postgres';

export const getCalculations = async () => {
    const result = await sql`SELECT * FROM calculations`;
    return result.rows;
};