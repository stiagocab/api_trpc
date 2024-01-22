import validator from 'validator';
import { boolean, string, object, number, ZodEnum, TypeOf } from 'zod';

export const BonusSchema = object({
  active: boolean().default(true),
  code: string().toUpperCase(),
  description: string().optional(),
  email: string().email(),
  endDate: string().datetime(),
  id: string().toUpperCase(),
  img: string().url().optional().nullable(),
  lock: boolean().default(false),
  minItemsValue: number().min(0).default(0),
  name: string().optional(),
  origin: string().optional().nullable(),
  originType: ZodEnum.create(['ORDER', 'MANUAL', 'PROMOTION', 'REFERRAL', 'REGISTRATION', 'OTHER'])
    .optional()
    .nullable(),
  phone: string().refine(validator.isMobilePhone).optional(),
  startDate: string().datetime(),
  value: number().min(0).default(0),
});

export type Bonus = TypeOf<typeof BonusSchema>;

export type Bonuses = ReadonlyArray<Bonus>;
