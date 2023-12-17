import express from 'express';
import { FacultyControllers } from './faculty.contolars';
import validationsRequest from '../../middlewears/validationRequest';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validationsRequest(FacultyValidation.updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
