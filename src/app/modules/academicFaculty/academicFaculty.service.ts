import { TacademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyInToDb = async (payload: TacademicFaculty) => {
  const createFaculty = await AcademicFacultyModel.create(payload);
  return createFaculty;
};

const getAllAcademicFacultiesFromDb = async () => {
  const allFaculty = await AcademicFacultyModel.find();
  return allFaculty;
};

const getSingleAcademicFacultyFromDb = async (facultyId: string) => {
  const singleFaculty = await AcademicFacultyModel.findById(facultyId);
  return singleFaculty;
};

const updateSingleAcademicFacultyInToDb = async (
  facultyId: string,
  payload: Partial<TacademicFaculty>,
) => {
  const updateFaculty = await AcademicFacultyModel.findOneAndUpdate(
    {
      _id: facultyId,
    },
    payload,
    { new: true },
  );
  return updateFaculty;
};

export const academicFacultyServices = {
  createAcademicFacultyInToDb,
  getAllAcademicFacultiesFromDb,
  getSingleAcademicFacultyFromDb,
  updateSingleAcademicFacultyInToDb,
};
