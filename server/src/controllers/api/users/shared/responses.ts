import { ApiProperty } from "@nestjs/swagger";
import { UserModel } from "../../../../schemas"
import { Stub } from "../../../../shared"

export class Create {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}

export class FindAll {


  @ApiProperty({
    example: [{ ...Stub.User.user() }]
  })
  users: UserModel.User[];

}

export class FindOne {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}

export class Update {
  
  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserModel.User;

}
