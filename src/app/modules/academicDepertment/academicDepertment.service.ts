import { TacademicDepertment } from './academicDepertment.interface';
import { AcademicDepertMentModel } from './academicDepertment.mode';

const createAcademicDepartMentInToDb = async (payload: TacademicDepertment) => {
  const result = await AcademicDepertMentModel.create(payload);
  return result;
};

const getallAcademicDepertmentFromDb = async () => {
  const result = await AcademicDepertMentModel.find();
  return result;
};

const getSingleAcademicDepertmentInToDb = async (depermentId: string) => {
  const result = await AcademicDepertMentModel.findById(depermentId);
  return result;
};

const updateSingleAcademicDepertmentInToDb = async (
  depermentId: string,
  payload: Partial<TacademicDepertment>,
) => {
  const result = await AcademicDepertMentModel.findOneAndUpdate(
    { _id: depermentId },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicDepertmentServices = {
  createAcademicDepartMentInToDb,
  getallAcademicDepertmentFromDb,
  getSingleAcademicDepertmentInToDb,
  updateSingleAcademicDepertmentInToDb,
};
