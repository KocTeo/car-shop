import Joi from 'joi';
import { ICar } from '../interfaces/ICar';

const validations = { 
  validateBody(data: ICar) {
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
    
    if (error) throw error;

    return value as ICar;
  },
};

export default validations;