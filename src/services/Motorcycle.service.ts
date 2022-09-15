import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import validations from './Validations.service';

export default class MotorcycleService implements IService<IMotorcycle> {
  protected _model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._model = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const motorcycle = validations.validateMotorcycleBody(obj);

    const createdMotorcycle = await this._model.create(motorcycle);

    return createdMotorcycle;
  } 

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._model.read();

    return motorcycles;
  }
  public async readOne(id: string): Promise<IMotorcycle | null> {
    const motorcycle = await this._model.readOne(id);

    if (!motorcycle) {
      const error = new Error();
      error.name = 'NotFoundObject';
      throw error;
    } 

    return motorcycle;
  }

  public async update(id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    const exist = await this._model.readOne(id);
    validations.checkIfExists(exist);
    
    const motorcycle = validations.validateMotorcycleBody(obj);

    const updatedMotorcycle = await this._model.update(id, motorcycle);

    return updatedMotorcycle;
  }

  public async delete(id: string): Promise<IMotorcycle | null> {
    const exist = await this._model.readOne(id);
    validations.checkIfExists(exist);
    
    const deletedMotorcycle = await this._model.delete(id);

    return deletedMotorcycle;
  }
}