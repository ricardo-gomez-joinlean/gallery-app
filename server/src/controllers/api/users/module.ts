import { Module } from "@nestjs/common";
import { UserController } from "./controller"
import * as Services from "../../../services"
import * as Shared from "../../../shared"


@Module({
  imports: [ 
    Shared.Providers.Cloudinary.CloudinaryModule,
    Services.UserModelModule, 
  ],
  controllers: [ UserController ]
})
export class UserModule {}