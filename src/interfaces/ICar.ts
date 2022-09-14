import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const carSchema = z.object({
  doorsQty: z.number({
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number',
  }).int({ message: 'doorsQty must be an integer' })
    .positive({ message: 'doorsQty must be an positive number' })
    .gte(2, { message: 'doorsQty must be greater or equal to 2' })
    .lte(4, { message: 'Year must be less or equal to 4' }),

  seatsQty: z.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  }).int({ message: 'seatsQty must be an integer' })
    .positive({ message: 'seatsQty must be an positive number' })
    .gte(2, { message: 'seatsQty must be greater or equal to 2' })
    .lte(7, { message: 'seatsQty must be less or equal to 7' }),
});

type CarSchema = z.infer<typeof carSchema>;

export type ICar = IVehicle & CarSchema;