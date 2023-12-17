import { Schema, model } from 'mongoose';
import { Gardiun, LocalGurdian, Student, UserName } from './student.interface';

const NameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is Required'],
    trim: true,
    maxlength: [20, 'Firstname not allow over 20 charecters'],
    // custom validation
    validate: {
      validator: function (value: string) {
        const firstName = value.charAt(0).toUpperCase() + value.slice(1);
        return firstName === value;
      },
      message: '{VALUE} is not vlaid',
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name is Required'] },
});

const GurdianSchema = new Schema<Gardiun>({
  fatherName: { type: String, required: [true, 'Father Name is Required'] },
  fatherOcupation: { type: String },
  fatherContactNO: { type: String },
  motherName: { type: String, required: [true, 'Mother Name is Required'] },
  motherOcupation: { type: String },
  motherContactNO: { type: String },
});
const LocalGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String },
  ocupation: { type: String },
  address: { type: String },
  contactNo: { type: String },
});

const StudentSchema = new Schema<Student>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User Id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: NameSchema,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: {
        values: ['female', 'male', 'others'],
        //{value} boro hater hote hobe Tahole user jei value ta input a deibe seita akhane add hobe
        message: '{VALUE} is NOT VALID',
      },
      required: true,
    },
    dateOfBirth: { type: String, required: true },
    contactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    parmanentAddress: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bladGroup: {
      type: String,
      enum: ['A+', 'A-', 'Ab+', 'Ab-', 'B+', 'B-', 'O+', 'O-'],
    },
    gardiun: {
      type: GurdianSchema,
      required: true,
    },
    localGurdian: {
      type: LocalGurdianSchema,
      required: true,
    },
    profileImg: { type: String, required: true },
    admissionSemister: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemister',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'academicDepertment',
    },
  },
  {
    timestamps: true,
  },
);

// Query Middleware
StudentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// //creating a custom static method
// StudentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await StudentModel.findOne({ id });
//   return existingUser;
// };

// createn studentModel model
export const StudentModel = model<Student>('Student', StudentSchema);
