import Joi from 'joi';
import { ICar } from '../interfaces/ICar';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const validations = { 
  validateCarBody(data: ICar) {
    const bodySchema = Joi.object({
      model: Joi.string().min(3).required(),
      year: Joi.number().min(1900).max(2022).required(),
      color: Joi.string().min(3).required(),
      buyValue: Joi.number().required(),
      status: Joi.string(),
      doorsQty: Joi.number().min(2).max(4).required(),
      seatsQty: Joi.number().min(2).max(7).required(),
    });

    const { error, value } = bodySchema.validate(data);
    
    if (error) {
      error.name = 'ValidationError';
      throw error;
    }

    return value as ICar;
  },

  validateMotorcycleBody(data: IMotorcycle) {
    const bodySchema = Joi.object({
      model: Joi.string().min(3).required(),
      year: Joi.number().min(1900).max(2022).required(),
      color: Joi.string().min(3).required(),
      buyValue: Joi.number().required(),
      status: Joi.string(),
      category: Joi.string().required(),
      engineCapacity: Joi.number().max(2500).required(),
    });

    const { error, value } = bodySchema.validate(data);
    
    if (error) {
      error.name = 'ValidationError';
      throw error;
    }

    return value as IMotorcycle;
  },

  checkIfExists: (exist: ICar | IMotorcycle | null) => {
    if (!exist) {
      const error = new Error();
      error.name = 'NotFoundObject';
      throw error;
    }
  },
};

export default validations;