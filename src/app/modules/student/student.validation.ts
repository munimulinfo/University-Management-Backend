import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOcupation: z.string(),
  fatherContactNO: z.string(),
  motherName: z.string(),
  motherOcupation: z.string(),
  motherContactNO: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string(),
  ocupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bladGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      gardiun: guardianSchema,
      localGurdian: localGuardianSchema,
      profileImg: z.string(),
      admissionSemister: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

/*****************************UPDATE SCHEMA******************************/
const updateUserNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    })
    .optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianSchema = z.object({
  fatherName: z.string().optional(),
  fatherOcupation: z.string().optional(),
  fatherContactNO: z.string().optional(),
  motherName: z.string().optional(),
  motherOcupation: z.string().optional(),
  motherContactNO: z.string().optional(),
});

const updatelocalGuardianSchema = z.object({
  name: z.string().optional(),
  ocupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameSchema.optional(),
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bladGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      parmanentAddress: z.string().optional(),
      gardiun: updateGuardianSchema.optional(),
      localGurdian: updatelocalGuardianSchema.optional(),
      profileImg: z.string().optional(),
      admissionSemister: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
