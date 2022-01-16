import { Module } from "@nestjs/common";
import { UserController } from "./controller"
import * as Services from "../../../services"


@Module({
  imports: [ Services.UserModelModule ],
  controllers: [ UserController ]
})
export class UserModule {}