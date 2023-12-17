import { Types } from 'mongoose';

export type Gardiun = {
  fatherName: string;
  fatherOcupation: string;
  fatherContactNO: string;
  motherName: string;
  motherOcupation: string;
  motherContactNO: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGurdian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  email: string;
  gender: 'male' | 'female' | 'others';
  contactNo: string;
  dateOfBirth: string;
  emergencyContactNo: string;
  bladGroup?: 'A+' | 'B+' | 'Ab+' | 'Ab-' | 'B-' | 'A-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gardiun: Gardiun;
  localGurdian: LocalGurdian;
  profileImg: string;
  admissionSemister: Types.ObjectId;
  isDeleted: boolean;
  academicDepartment: Types.ObjectId;
};

// export interface StudenFindModel extends Model<Student> {
//   isUserExists(id: string): Promise<Student | null>;
// }
