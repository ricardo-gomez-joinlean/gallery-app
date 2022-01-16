import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import * as _ from 'lodash'

import { User } from './schema'
import { Dto } from '../../shared'

import * as Shared from "../../shared"

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: Shared.Providers.JWT.JWTService
  ) {}

  async create(dto: Dto.User.UserCreateOrUpdateDto) {

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
      .findOne({ id, isDeleted: false })
      .select({  
        email: 1,
        name: 1,
        lastname: 1,
        birthdate: 1
      });
  }
  
  async update(id: string, dto: Dto.User.UserCreateOrUpdateDto) {
    return this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteOne(id: string) {
    return this.userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  }

  async changePassword(dto: Dto.User.UserChangePasswordDto) {
  
    const requestedUser = await this.userModel.findById(dto.id);

    const isPasswordMatched = bcrypt.compareSync(dto.currentPassword, requestedUser.password);

    if ( !isPasswordMatched )
      throw new BadRequestException('invalid password');

    if ( dto.newpassword != dto.confirmNewPassword )
      throw new BadRequestException('confirm password not valid')
    
    const updatedUser = await this.userModel.findByIdAndUpdate(
      dto.id, 
      { password: bcrypt.hashSync(dto.newpassword, 12) }, 
      { new: true }
    );

    return updatedUser ? true : false;

  }

  async updateAvatarImage(id: string, newAvatarImgUrl: string) {

    return this.userModel.findByIdAndUpdate(id, { avatarImageUrl: newAvatarImgUrl }, { new: true });

  }

  async auth(email: string, password: string) {
    
    const userDB = await this.userModel.findOne({ email });
    
    if ( !userDB )
      throw new BadRequestException('email or password invalid');
      
    const isPasswordMatched = bcrypt.compareSync(password, userDB.password);

    if ( !isPasswordMatched )
      throw new BadRequestException('invalid password');

    const token = this.jwtService.verify(userDB.id);

    return token;

  }

}