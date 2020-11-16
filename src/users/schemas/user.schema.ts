import * as mongoose from 'mongoose';
import { Roles } from 'src/shared/enums/roles.enum';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  characters: [
    {
      name: { type: String, required: true, unique: true },
      hp: { type: Number, required: true },
      strength: { type: Number, required: true, default: 0 },
      defense: { type: Number, required: true, default: 0 },
      agility: { type: Number, required: true, default: 0 },
      level: { type: Number, required: true, default: 1 },
      exp: { type: Number, required: true, default: 0 },
      ap: { type: Number, required: true, default: 0 },
      expNeeded: { type: Number, required: true, default: 100 },
    },
  ],
  gold: { type: Number, required: true, default: 0 },
  role: { type: Number, enum: Roles },
});
