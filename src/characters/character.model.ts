import { Document } from 'mongoose';

export interface Character extends Document {
  id: string;
  name: string;
  hp: number;
  strength: number;
  defense: number;
  agility: number;
  level: number;
  exp: number;
  ap: number;
  expNeeded: number;
}
