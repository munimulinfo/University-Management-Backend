import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemister.interface';
import {
  academicSemisterCode,
  academicSemisterName,
  months,
} from './academicSemister.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicSemisterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, required: true, enum: academicSemisterName },
    code: { type: String, required: true, enum: academicSemisterCode },
    year: { type: String, required: true },
    startMonth: { type: String, enum: months },
    endMonth: { type: String, enum: months },
  },
  { timestamps: true },
);

//check similer year similar name create academic semister
academicSemisterSchema.pre('save', async function (next) {
  const isSemisterExits = await AcademicSemisTerModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemisterExits) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Semis alredy created in this yerar please change year',
    );
  }
  next();
});

export const AcademicSemisTerModel = model<TAcademicSemester>(
  'AcademicSemister',
  academicSemisterSchema,
);
