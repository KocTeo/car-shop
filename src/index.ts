import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/connection';

connectToDatabase();
