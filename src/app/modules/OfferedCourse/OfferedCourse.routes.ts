import express from 'express';
import { OfferedCourseValidations } from './OfferedCourse.validation';
import validationsRequest from '../../middlewears/validationRequest';
import { OfferedCourseControllers } from './OfferedCourse.contoller';

const router = express.Router();

router.get('/', OfferedCourseControllers.getAllOfferedCourses);

router.get('/:id', OfferedCourseControllers.getSingleOfferedCourses);

router.post(
  '/create-offered-course',
  validationsRequest(
    OfferedCourseValidations.createOfferedCourseValidationSchema,
  ),
  OfferedCourseControllers.createOfferedCourse,
);

router.patch(
  '/:id',
  validationsRequest(
    OfferedCourseValidations.updateOfferedCourseValidationSchema,
  ),
  OfferedCourseControllers.updateOfferedCourse,
);

router.delete('/:id', OfferedCourseControllers.deleteOfferedCourseFromDB);

export const offeredCourseRoutes = router;
