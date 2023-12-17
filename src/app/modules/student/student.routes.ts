import express from 'express';
import { studentContolears } from './student.controler';
import validationsRequest from '../../middlewears/validationRequest';
import { studentValidations } from './student.validation';
const router = express.Router();
router.get('/all-student', studentContolears.getAllStudent);
router.get('/single-student/:studentId', studentContolears.getSingleStudent);
router.patch(
  '/update-student/:studentId',
  validationsRequest(studentValidations.updateStudentValidationSchema),
  studentContolears.updateStudent,
);
router.delete('/delet-student/:studentId', studentContolears.getSingleStudent);

export const studenRoutes = router;
