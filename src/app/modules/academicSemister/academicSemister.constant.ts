import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
  TacademicSemisterNameCodeMapper,
} from './academicSemister.interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemisterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];

export const academicSemisterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
// this constan object mapping type declare interface semisteracademi
export const academicSemisterNameCodeMapper: TacademicSemisterNameCodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
