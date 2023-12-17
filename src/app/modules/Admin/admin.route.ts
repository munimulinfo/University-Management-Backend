import express from 'express';
import { updateAdminValidationSchema } from './admin.validation';
import validationsRequest from '../../middlewears/validationRequest';
import { AdminControllers } from './admin.contolars';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validationsRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:adminId', AdminControllers.deleteAdmin);

export const AdminRoutes = router;
