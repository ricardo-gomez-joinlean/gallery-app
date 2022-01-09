import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from "./service"
import { UserModel } from '../../schemas'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserModel.User.name, schema: UserModel.UserSchema }
    ])
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModelModule {}