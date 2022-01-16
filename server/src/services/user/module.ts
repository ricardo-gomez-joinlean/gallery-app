import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from "./service"
import { User, UserSchema } from './schema'

import * as Shared from "../../shared"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ]),
    Shared.Providers.JWT.JwtModule
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModelModule {}