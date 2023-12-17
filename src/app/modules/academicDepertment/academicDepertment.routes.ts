import express from 'express';
import validationsRequest from '../../middlewears/validationRequest';
import { academicDepertMentValidation } from './academicDepertment.validation';
import { AcademicDepartmentContolars } from './academicDepertment.contolars';
const router = express.Router();

router.post(
  '/create-academic-department',
  validationsRequest(
    academicDepertMentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentContolars.createAcademicDepertMent,
);

router.get('/', AcademicDepartmentContolars.getAllAcademicDepartMent);
router.get(
  '/single-academic-department/:depertmentId',
  AcademicDepartmentContolars.getSingleAcademicDepartMent,
);
router.patch(
  '/update-academic-department/:depertmentId',
  validationsRequest(
    academicDepertMentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentContolars.updateSingleAcademicDepartMent,
);

export const AcademicDepartMentRoutes = router;
