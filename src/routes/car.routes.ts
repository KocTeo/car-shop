import { Router } from 'express';
import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car.model';
import CarService from '../services/Car.service';

const carRoute = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRoute.post('/', (req, res) => carController.create(req, res));
carRoute.get('/', (req, res) => carController.read(req, res));
carRoute.get('/:id', (req, res) => carController.readOne(req, res));
carRoute.put('/:id', (req, res) => carController.update(req, res));
carRoute.delete('/:id', (req, res) => carController.delete(req, res));

export default carRoute;