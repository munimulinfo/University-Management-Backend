import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepertmentServices } from './academicDepertment.service';

const createAcademicDepertMent = catchAsync(async (req, res) => {
  const depertmentData = req.body;
  const result =
    await AcademicDepertmentServices.createAcademicDepartMentInToDb(
      depertmentData,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is Created Succesfully',
    data: result,
  });
});

const getAllAcademicDepartMent = catchAsync(async (req, res) => {
  const result =
    await AcademicDepertmentServices.getallAcademicDepertmentFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Department are retrivied Succesfully',
    data: result,
  });
});

const getSingleAcademicDepartMent = catchAsync(async (req, res) => {
  const depertmentId = req.params.depertmentId;
  const result =
    await AcademicDepertmentServices.getSingleAcademicDepertmentInToDb(
      depertmentId,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single Academic Department is retrivied Succesfully',
    data: result,
  });
});

const updateSingleAcademicDepartMent = catchAsync(async (req, res) => {
  const depertmentId = req.params.depertmentId;
  const updateData = req.body;
  const result =
    await AcademicDepertmentServices.updateSingleAcademicDepertmentInToDb(
      depertmentId,
      updateData,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Academic Department is update Succesfully',
    data: result,
  });
});

export const AcademicDepartmentContolars = {
  createAcademicDepertMent,
  getAllAcademicDepartMent,
  getSingleAcademicDepartMent,
  updateSingleAcademicDepartMent,
};
