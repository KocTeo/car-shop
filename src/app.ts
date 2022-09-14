import express from 'express';
import middlewareError from './error';

const app = express();

app.use(middlewareError);

export default app;
