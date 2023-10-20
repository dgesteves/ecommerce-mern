import { Schema, model } from 'mongoose';

import { IUser } from './types';

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availableMoney: { type: Number, default: 5000 },
  //purchasedItems:
});

export const UserModel = model<IUser>('User', UserSchema);
