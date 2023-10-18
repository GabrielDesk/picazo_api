import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  findAllUsers(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  findOneUser(id: number) {
    return this.UserModel.find({
      userId: id,
    });
  }

  updateLastPaintByUser(updateLastPaintByUser: {
    userId: number;
    lastPaintId: number;
  }) {
    return this.UserModel.updateOne(
      {
        userId: updateLastPaintByUser.userId,
      },
      {
        $set: {
          lastPaintId: updateLastPaintByUser.lastPaintId,
        },
      },
    );
  }

  // updateUser(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  removeUser(id: number) {
    return this.UserModel.findOneAndRemove({
      _id: id,
    }).exec();
  }
}
