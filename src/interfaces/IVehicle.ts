import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, {
    message: 'Must be 3 or more characters long',
  }),

  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  })
    .gte(1900, { message: 'Year must be greater or equal to 1900' })
    .lte(2022, { message: 'Year must be less or equal to 2022' })
    .int({ message: 'Year must be an integer' }),

  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, {
    message: 'Must be 3 or more characters long',
  }),

  status: z.boolean({
    invalid_type_error: 'Color must be a boolean',
  }).optional(),

  buyValue: z.number({
    required_error: 'Buy Value is required',
    invalid_type_error: 'Buy Value must be a number',
  }).int({ message: 'Buy Value must be an integer' }),
});

export type IVehicle = z.infer<typeof VehicleSchema>;
