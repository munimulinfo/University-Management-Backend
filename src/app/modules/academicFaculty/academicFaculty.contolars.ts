import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const facultyData = req.body;
  const result =
    await academicFacultyServices.createAcademicFacultyInToDb(facultyData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is created succesfully',
    data: result,
  });
});

const getAcademicAllFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFacultiesFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic allfaculty is get succesfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.facultyId;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDb(facultyId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic faculty is get succesfully',
    data: result,
  });
});

const updateSingleAcademicFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.facultyId;
  const updateFacultyData = req.body;
  const result =
    await academicFacultyServices.updateSingleAcademicFacultyInToDb(
      facultyId,
      updateFacultyData,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facultydata is Updated Succesfully',
    data: result,
  });
});

export const academicFacultyContolars = {
  createAcademicFaculty,
  getAcademicAllFaculty,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
};
