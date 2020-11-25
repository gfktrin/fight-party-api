import * as mongoose from 'mongoose';
import { Consequences } from 'src/shared/enums/consequences.enum';
import { Moves } from 'src/shared/enums/moves.enum';

export const FightSchema = new mongoose.Schema({
  firstFighterId: { type: mongoose.Schema.Types.ObjectId, required: true },
  secondFighterId: { type: mongoose.Schema.Types.ObjectId, required: true },
  steps: [
    {
      move: { type: Number, enum: Moves, required: true },
      consequence: { type: Number, enum: Consequences, required: true },
      target: { type: mongoose.Schema.Types.ObjectId, required: true },
      value: { type: Number, required: true },
    },
  ],
  winnerId: { type: mongoose.Schema.Types.ObjectId, required: false },
  fightEnded: { type: Boolean, required: true },
});
