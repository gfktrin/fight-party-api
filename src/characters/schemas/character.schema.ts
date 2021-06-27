import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  hp: { type: Number, required: true, default: 0 },
  strength: { type: Number, required: true, default: 0 },
  defense: { type: Number, required: true, default: 0 },
  agility: { type: Number, required: true, default: 0 },
  level: { type: Number, required: true, default: 0 },
  exp: { type: Number, required: true, default: 0 },
  ap: { type: Number, required: true, default: 0 },
  expNeeded: { type: Number, required: true, default: 0 },
});
