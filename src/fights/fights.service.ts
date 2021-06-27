import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Character } from 'src/characters/character.model';
import { Fight } from './fight';

@Injectable()
export class FightsService {
  constructor(
    @InjectModel('Fight') private readonly fightModel: Model<Fight>,
  ) {}

  async getById(id: string) {
    return await this.fightModel.findById(id).exec();
  }

  // async create(firstFighter: Character, secondFighter: Character) {

  //   //const createdUser = new this.fightModel();
  //   //return await createdUser.save();
  // }
}
