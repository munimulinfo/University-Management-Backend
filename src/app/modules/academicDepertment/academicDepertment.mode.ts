import { Schema, model } from 'mongoose';
import { TacademicDepertment } from './academicDepertment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicDepartmentSchema = new Schema<TacademicDepertment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

//mongose pre hook data check
academicDepartmentSchema.pre('save', async function (next) {
  const isDepermentExist = await AcademicDepertMentModel.findOne({
    name: this.name,
  });
  if (isDepermentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This depertment Name Alredy Exsits',
    );
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepertmentExists = await AcademicDepertMentModel.findOne(query);
  if (!isDepertmentExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department is already exist!',
    );
  }
  next();
});

export const AcademicDepertMentModel = model<TacademicDepertment>(
  'academicDepertment',
  academicDepartmentSchema,
);
