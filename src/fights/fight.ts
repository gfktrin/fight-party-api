import { Character } from 'src/characters/character';
import { Moves } from 'src/shared/enums/moves.enum';

export class Fight {
  id: string;
  firstFighter: Character;
  secondFighter: Character;
  steps: Step[];
  winnerId?: string;
  fightEnded: boolean;
}

class Step {
  move: Moves;
  consequence: string;
  value: number;
}
