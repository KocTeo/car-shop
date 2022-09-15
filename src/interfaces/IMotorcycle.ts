import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const motorcycleSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),

  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  })
    .int({ message: 'engineCapacity must be an integer' })
    .positive({ message: 'engineCapacity must be an positive number' })
    .lte(2500, { message: 'engineCapacity must be less or equal to 2500' }),
});

type MotorcycleSchema = z.infer<typeof motorcycleSchema>;

export type IMotorcycle = IVehicle & MotorcycleSchema;