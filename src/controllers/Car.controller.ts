import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const car = req.body;
    
    const createdCar = await this._service.create(car);

    return res.status(201).json(createdCar);
  }

  public async read(req: Request, res: Response) {
    const cars = await this._service.read();

    return res.status(200).json(cars);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;

    const car = await this._service.readOne(id);

    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const car = req.body;

    const updatedCar = await this._service.update(id, car);

    return res.status(200).json(updatedCar);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedCar = await this._service.delete(id);

    return res.status(204).json(deletedCar);
  }
}