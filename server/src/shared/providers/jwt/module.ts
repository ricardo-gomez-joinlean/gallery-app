import { Module } from "@nestjs/common";
import { JWTService } from "./service"

@Module({
  providers: [JWTService],
  exports: [JWTService]
})
export class JwtModule {}