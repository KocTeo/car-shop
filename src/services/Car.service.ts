import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import validations from './Validations.service';

export default class CarService implements IService<ICar> {
  protected _model: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._model = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const car = validations.validateCarBody(obj);

    const createdCar = await this._model.create(car);

    return createdCar;
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._model.read();

    return cars;
  }

  public async readOne(id: string): Promise<ICar | null> {
    const car = await this._model.readOne(id);
    console.log(car);
    
    if (!car) {
      const error = new Error();
      error.name = 'NotFoundObject';
      throw error;
    } 

    return car;
  }

  public async update(id: string, obj: ICar): Promise<ICar | null> {
    const exist = await this._model.readOne(id);
    validations.checkIfExists(exist);
    
    const car = validations.validateCarBody(obj);

    const updatedCar = await this._model.update(id, car);

    return updatedCar;
  }

  public async delete(id: string): Promise<ICar | null> {
    const exist = await this._model.readOne(id);
    validations.checkIfExists(exist);
    
    const deletedCar = await this._model.delete(id);

    return deletedCar;
  }
}