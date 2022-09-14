import { FilterQuery, isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

const error = new Error();
error.name = 'InvalidMongoId';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const vehicle = await this._model.create({ ...obj }); 

    return vehicle;
  }

  public async read(): Promise<T[]> {
    const vehicles = await this._model.find();

    return vehicles;
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw error;
    }

    const vehicle = await this._model.findOne({ id });

    return vehicle;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw error;
    }

    const vehicle = await this._model.findOneAndUpdate(
      { id } as FilterQuery<T>,
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );

    return vehicle;
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw error;
    }

    const vehicle = await this._model.findOneAndDelete({ id });

    return vehicle;
  }
}

export default MongoModel;