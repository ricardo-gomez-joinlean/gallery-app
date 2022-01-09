import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { hashSync } from 'bcrypt'
import * as _ from 'lodash'

import { UserModel } from '../../schemas'
import { Dto } from '../../shared'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserModel.User.name) private readonly userModel: Model<UserModel.UserDocument>
  ) {}

  async create(dto: Dto.User.CreateOrUpdate) {

    if ( dto.password ) 
      dto.password = bcrypt.hashSync(dto.password, 12);

    const user = await new this.userModel(dto).save();

    user.password = '';

    return user;

  }

  async find() {
    return await this.userModel
      .find()
      .select({  
        email: 1,
        name: 1,
        lastname: 1,
        birthdate: 1
      });
  }

  async findOne(id: string) {
    return this.userModel
      .findById(id)
      .select({  
        email: 1,
        name: 1,
        lastname: 1,
        birthdate: 1
      });
  }
  
  async update(id: string, dto: Dto.User.CreateOrUpdate) {
    return this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteOne(id: string) {
    return this.userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  }

  async changePassword(id: string, password: string, confirmPassword: string) {
    
    const requestedUser = await this.userModel.findById(id);

    if ( !requestedUser )
      throw new BadRequestException('user not found');

    if ( password != confirmPassword )
      throw new BadRequestException('confirm password not valid')

    const isPasswordMatched = bcrypt.compareSync(password, requestedUser.password);

    if ( isPasswordMatched )
      throw new BadRequestException('invalid password');

    const updatedUser = await this.userModel.findByIdAndUpdate(id, { password }, { new: true });

    return updatedUser ? true : false;

  }

}