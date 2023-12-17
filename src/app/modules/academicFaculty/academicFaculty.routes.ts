import express from 'express';
import { academicFacultyContolars } from './academicFaculty.contolars';
import validationsRequest from '../../middlewears/validationRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validationsRequest(
    academicFacultyValidation.createAcademicFacultyvalidationSchema,
  ),
  academicFacultyContolars.createAcademicFaculty,
);
router.patch(
  '/update-faculty/:facultyId',
  validationsRequest(
    academicFacultyValidation.updateAcademicFacultyvalidationSchema,
  ),
  academicFacultyContolars.updateSingleAcademicFaculty,
);

router.get('/', academicFacultyContolars.getAcademicAllFaculty);
router.get(
  '/single-faculty/:facultyId',
  academicFacultyContolars.getSingleAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
