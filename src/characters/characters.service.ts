import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { setRandomAttributes } from 'src/shared/setRandomAttributes';
import { UsersService } from 'src/users/users.service';
import { Character } from './character.model';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel('Character') private readonly characterModel: Model<Character>,
    private readonly usersService: UsersService,
  ) {}

  async getById(id: string) {
    return await this.characterModel.findById(id).exec();
  }

  async create(id: string, name: string) {
    let newCharacter = new this.characterModel({
      name,
      hp: 100,
      strength: 5,
      defense: 5,
      agility: 5,
      expNeeded: 100,
    });
    newCharacter = setRandomAttributes(newCharacter);
    await newCharacter.save();

    await this.usersService.addCharacter(id, newCharacter._id);

    return newCharacter;
  }
}
