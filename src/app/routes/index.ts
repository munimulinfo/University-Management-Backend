import { Router } from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { studenRoutes } from '../modules/student/student.routes';
import { AcademicSemisterRoutes } from '../modules/academicSemister/academicSemister.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartMentRoutes } from '../modules/academicDepertment/academicDepertment.routes';
import { FacultyRoutes } from '../modules/Faculty/faculty.routes';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { CourseRoutes } from '../modules/Course/course.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: studenRoutes,
  },
  {
    path: '/academic-semister',
    route: AcademicSemisterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartMentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
