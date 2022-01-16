import { ApiProperty, ApiResponse } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserCreateOrUpdateDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'example@hotmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jose' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Perez' })
  lastname: string;

  @IsDate()
  @Type(() => Date)
  @ApiProperty({ example: new Date() })
  birthdate: Date;

  @IsString()
  @ApiProperty({ example: 'qwr[p124s12412' })
  password?: string;

}

export class UserChangePasswordDto {
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'new.password' })
  currentPassword: string
    
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'new.password' })
  newpassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'new.password' })
  confirmNewPassword: string;

}

export class UserUpdateAvatarImgDto {

  @IsString()
  @IsOptional()
  url?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  file?: any;

}

export class UserAuthDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'rickgomezperez@gmail.com'
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'any password'
  })
  password: string;

}

