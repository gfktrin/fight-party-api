import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async update(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async addCharacter(id: string, characterId: string) {
    await this.userModel
      .findOneAndUpdate(
        { _id: id },
        { $push: { characters: characterId } },
        { new: true },
        (err, result) => {
          if (err) {
            throw err;
          }
          return result;
        },
      )
      .exec();
  }
}
