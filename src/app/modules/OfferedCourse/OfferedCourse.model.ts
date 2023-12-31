import mongoose, { Schema } from 'mongoose';
import { Days } from './OfferedCourse.constant';
import { TOfferedCourse } from './OfferedCourse.interface';

const offeredCourseSchema = new mongoose.Schema<TOfferedCourse>(
  {
    semesterRegistration: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'SemesterRegistrationModel',
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicSemisTerModel',
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicFacultyModel',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicDepertMentModel',
    },
    course: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'CourseModel',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'FaculltyModel',
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    section: {
      type: Number,
      required: true,
    },
    days: [
      {
        type: String,
        enum: Days,
      },
    ],
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OfferedCourseModel = mongoose.model<TOfferedCourse>(
  'OfferedCourse',
  offeredCourseSchema,
);
