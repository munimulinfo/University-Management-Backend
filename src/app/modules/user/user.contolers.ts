import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
// import userValidationSchema from './user.validations';

const createStudent = catchAsync(async (req, res) => {
  const { student: studentData, password } = req.body;
  // const zodValidaton = userValidationSchema.parse(student)
  const result = await userServices.createStudentIntoDb(studentData, password);
  sendResponse(res, {
    statusCode: 200,
    message: 'Student is Created Succesfully',
    success: true,
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await userServices.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await userServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

export const userContolers = {
  createStudent,
  createAdmin,
  createFaculty,
};
