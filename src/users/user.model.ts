import { Document } from 'mongoose';
import { Roles } from 'src/shared/enums/roles.enum';

export interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  characters: string[];
  gold: number;
  role: Roles;
  validatePassword(password: string): boolean;
}
