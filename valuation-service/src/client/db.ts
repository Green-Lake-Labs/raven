import dotenv from 'dotenv';
import path from 'path';
import pg from 'pg';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

export const dbPool = new pg.Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PWD,
    user: process.env.POSTGRES_USER,
    port: Number(process.env.POSTGRES_PORT),
})