import { ApiProperty } from "@nestjs/swagger";
import { UserModel } from "../../../../schemas"
import { Stub } from "../../../../shared"

export class CreateResponse {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}

export class FindAllResponse {


  @ApiProperty({
    example: [{ ...Stub.User.user() }]
  })
  users: UserModel.User[];

}

export class FindOneResponse {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}

export class UpdateResponse {
  
  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}

export class ChangePasswordResponse {

  @ApiProperty({
    example: true
  })
  isChanged: boolean;

}
