import { ApiProperty, ApiResponse } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateOrUpdateDto {

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

export class ChangePasswordDto {
  
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
