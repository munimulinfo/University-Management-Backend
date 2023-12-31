import { Router } from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { studenRoutes } from '../modules/student/student.routes';
import { AcademicSemisterRoutes } from '../modules/academicSemister/academicSemister.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartMentRoutes } from '../modules/academicDepertment/academicDepertment.routes';
import { FacultyRoutes } from '../modules/Faculty/faculty.routes';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { CourseRoutes } from '../modules/Course/course.routes';
import { semesterRegistrationRoutes } from '../modules/semisterRegistration/semisterRegistration.routes';
import { offeredCourseRoutes } from '../modules/OfferedCourse/OfferedCourse.routes';

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
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
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
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
