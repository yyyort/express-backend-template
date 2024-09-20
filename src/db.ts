//drizzle imports
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { config } from 'dotenv';

//config
config({ path: ".env" }); // or .env.local

//drizzle set up
const client = new Client({
    connectionString: process.env.DATABASE_URL,
})

client.connect();
export const db = drizzle(client);