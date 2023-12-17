import { z } from 'zod';
import {
  academicSemisterCode,
  academicSemisterName,
  months,
} from './academicSemister.constant';

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemisterName] as [string, ...string[]]),
    code: z.enum([...academicSemisterCode] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

const updateAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemisterName] as [string, ...string[]]).optional(),
    code: z.enum([...academicSemisterCode] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...months] as [string, ...string[]]).optional(),
  }),
});

export const academicSemisterValidation = {
  createAcademicSemisterValidationSchema,
  updateAcademicSemisterValidationSchema,
};
