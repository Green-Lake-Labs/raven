import dotenv from 'dotenv';
import path from 'path';
import { MongoClient } from 'mongodb';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

export const dbPool = new MongoClient(process.env.MONGO_URI).db('raven');

