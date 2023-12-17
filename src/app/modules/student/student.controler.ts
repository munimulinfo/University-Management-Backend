import { studentSevices } from './student.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentSevices.getAllStudentFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AllStudent is retrieved successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const result = await studentSevices.getSingleStudentFromDb(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

const deletSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const result = await studentSevices.deletStudentFromDb(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted succesfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const updateData = req.body;
  const result = await studentSevices.updateStudentIntoDB(
    studentId,
    updateData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student data updated succesfuly',
    data: result,
  });
});

export const studentContolears = {
  getAllStudent,
  getSingleStudent,
  deletSingleStudent,
  updateStudent,
};
