import express from 'express';
import { userContolers } from './user.contolers';
import validationsRequest from '../../middlewears/validationRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
const router = express.Router();
router.post(
  '/create-student',
  validationsRequest(createStudentValidationSchema),
  userContolers.createStudent,
);
router.post(
  '/create-faculty',
  validationsRequest(createFacultyValidationSchema),
  userContolers.createFaculty,
);

router.post(
  '/create-admin',
  validationsRequest(createAdminValidationSchema),
  userContolers.createAdmin,
);
export const userRoutes = router;
