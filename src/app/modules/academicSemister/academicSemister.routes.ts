import express from 'express';
import { academicSemisterContolars } from './academicSemister.contolears';
import validationsRequest from '../../middlewears/validationRequest';
import { academicSemisterValidation } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-academic-semister',
  validationsRequest(
    academicSemisterValidation.createAcademicSemisterValidationSchema,
  ),
  academicSemisterContolars.createAcademicSemister,
);

router.patch(
  '/:id',
  validationsRequest(
    academicSemisterValidation.updateAcademicSemisterValidationSchema,
  ),
  academicSemisterContolars.updateAcademicSemister,
);
router.get('/:id', academicSemisterContolars.getSingleAcademicSemister);

router.get('/', academicSemisterContolars.getAllAcademicSemister);

export const AcademicSemisterRoutes = router;
