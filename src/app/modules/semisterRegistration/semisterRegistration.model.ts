import mongoose, { Schema } from 'mongoose';
import { SemesterRegistrationStatus } from './semisterRegistration.constant';
import { TSemesterRegistration } from './semisterRegistration.interface';

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'AcademicSemisTerModel',
    },
    status: {
      type: String,
      enum: SemesterRegistrationStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
    maxCredit: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export const SemesterRegistrationModel = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
