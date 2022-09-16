import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/connection';

const mongoURL = process.env.MONGO_URI as string;
const port = process.env.PORT;

connectToDatabase(mongoURL);

app.listen(port, () => console.log('Node Rodando'));
