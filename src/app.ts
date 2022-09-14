import express from 'express';
import middlewareError from './error';
import carRoute from './routes/car.routes';

const app = express();

app.use('/cars', carRoute);

app.use(middlewareError);

export default app;
