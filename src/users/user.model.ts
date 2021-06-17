import { Document } from 'mongoose';
import { Character } from 'src/characters/character';
import { Roles } from 'src/shared/enums/roles.enum';

export interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  characters: Character[];
  gold: number;
  role: Roles;
  validatePassword(password: string): boolean;
}
