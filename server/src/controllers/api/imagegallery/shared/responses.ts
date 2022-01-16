import { ApiProperty } from "@nestjs/swagger";
import { ImageGallerySchema } from "../../../../services"
import * as Shared from "../../../../shared"

export class ImageGalleryCreateResponse {

  @ApiProperty({
    example: { ...Shared.Stub.ImageGalllery.imageGallery() }
  })
  imageGallery: ImageGallerySchema.ImageGallery;

}

export class ImageGalleryFindByUserResponse {

  @ApiProperty({
    example: [ Shared.Stub.ImageGalllery.imageGallery() ] 
  })
  images: ImageGallerySchema.ImageGallery[];

}