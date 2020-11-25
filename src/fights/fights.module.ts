import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FightsController } from './fights.controller';
import { FightsService } from './fights.service';
import { FightSchema } from './schemas/fight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Fight', schema: FightSchema }]),
  ],
  controllers: [FightsController],
  providers: [FightsService],
})
export class FightsModule {}
