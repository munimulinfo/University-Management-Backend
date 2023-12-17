import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicSemisterServices } from './academicSemister.service';

//create academic semister
const createAcademicSemister = catchAsync(async (req, res) => {
  const academicSemisterData = req.body;
  const result =
    await academicSemisterServices.createAcademicSemisterInToDb(
      academicSemisterData,
    );
  sendResponse(res, {
    statusCode: 200,
    message: 'academicSemister is Created Succesfully',
    success: true,
    data: result,
  });
});

//get all academic semister

const getAllAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

//get single academic semister find by id

const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const academicSemisterID = req.params.id;
  const result =
    await academicSemisterServices.getSingleAcademicSemesterFromDB(
      academicSemisterID,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

//update academicSemister

const updateAcademicSemister = catchAsync(async (req, res) => {
  const academicSemisterID = req.params.id;
  const updateSemisterData = req.body;
  const result = await academicSemisterServices.updateAcademicSemesterIntoDB(
    academicSemisterID,
    updateSemisterData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const academicSemisterContolars = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
