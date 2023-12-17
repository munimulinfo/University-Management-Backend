import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { academicSemisterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemisTerModel } from './academicSemister.model';

const createAcademicSemisterInToDb = async (payload: TAcademicSemester) => {
  //check semister code write or worng
  if (academicSemisterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semister Code is INvalid');
  }
  const createAcademicSemister = await AcademicSemisTerModel.create(payload);
  return createAcademicSemister;
};

//get all semister
const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemisTerModel.find();
  return result;
};

//get single semister
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemisTerModel.findById(id);
  return result;
};

//update semister
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemisterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Invalid Semester Code');
  }

  const result = await AcademicSemisTerModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterInToDb,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
