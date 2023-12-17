import { z } from 'zod';

const createAcademicFacultyvalidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Faculty name must be string' }),
  }),
});
const updateAcademicFacultyvalidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Faculty name must be string' }),
  }),
});

export const academicFacultyValidation = {
  createAcademicFacultyvalidationSchema,
  updateAcademicFacultyvalidationSchema,
};
