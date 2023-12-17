import { Types } from 'mongoose';

export type TacademicDepertment = {
  name: string;
  academicFaculty: Types.ObjectId;
};
