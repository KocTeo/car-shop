import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async create(
    req: Request & { body: IMotorcycle },
    res: Response<IMotorcycle>,
  ) {
    const motorcycle = req.body;
    
    const createdMotorcycle = await this._service.create(motorcycle);

    return res.status(201).json(createdMotorcycle);
  }

  public async read(req: Request, res: Response) {
    const motorcycles = await this._service.read();

    return res.status(200).json(motorcycles);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;

    const motorcycle = await this._service.readOne(id);

    return res.status(200).json(motorcycle);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = req.body;

    const updatedMotorcycle = await this._service.update(id, motorcycle);

    return res.status(200).json(updatedMotorcycle);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedMotorcycle = await this._service.delete(id);

    return res.status(204).json(deletedMotorcycle);
  }
}