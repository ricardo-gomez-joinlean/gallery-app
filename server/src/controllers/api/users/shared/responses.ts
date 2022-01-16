import { ApiProperty } from "@nestjs/swagger";
import { UserSchema } from "../../../../services"
import { Stub } from "../../../../shared"

export class UserCreateResponse {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserSchema.User;

}

export class UserFindAllResponse {


  @ApiProperty({
    example: [{ ...Stub.User.user() }]
  })
  users: UserSchema.User[];

}

export class UserFindOneResponse {

  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserSchema.User;

}

export class UserUpdateResponse {
  
  @ApiProperty({
    example: Stub.User.user()
  })
  user: UserSchema.User;

}

export class UserChangePasswordResponse {

  @ApiProperty({
    example: true
  })
  isChanged: boolean;

}

export class UserUpdateAvatarImgResponse {

  @ApiProperty({
    example: true
  })
  isChanged: boolean;

}

export class UserAuthResponse {

  @ApiProperty({ example: 'a token xd' })
  token: string;

}
