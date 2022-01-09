import { Module } from "@nestjs/common";
import { UserController } from "./controller"
import { UserModelModule } from "../../../services"


@Module({
  imports: [ UserModelModule ],
  controllers: [ UserController ]
})
export class UserModule {}