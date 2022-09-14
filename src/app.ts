import express from 'express';
import 'express-async-errors';
import middlewareError from './error';
import carRoute from './routes/car.routes';

const app = express();

app.use(express.json());

app.use('/cars', carRoute);

app.use(middlewareError);

export default app;
