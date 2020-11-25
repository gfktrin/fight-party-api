import { Document } from 'mongoose';
import { Moves } from 'src/shared/enums/moves.enum';

export class Fight extends Document {
  id: string;
  firstFighterId: string;
  secondFighterId: string;
  steps: Step[];
  winnerId?: string;
  fightEnded: boolean;
}

class Step {
  move: Moves;
  consequence: string;
  value: number;
  target: string;
}
