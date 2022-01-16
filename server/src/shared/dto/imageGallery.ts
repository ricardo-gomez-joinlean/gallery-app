import * as mongoose from "mongoose"
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ImageGalleryCreateDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: new mongoose.Types.ObjectId().toHexString() })
  user: string;

  @IsString()
  @IsOptional()
  url?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  file?: any;

}