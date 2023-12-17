import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const UserSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// response data customized
UserSchema.methods.toJSON = function () {
  try {
    const obj = this.toObject();
    delete obj.password;
    delete obj.__v;
    return obj;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new AppError(httpStatus.NOT_FOUND, `${error}`);
  }
};

//password convert hashing
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

const UserModel = model<TUser>('user', UserSchema);
export default UserModel;
