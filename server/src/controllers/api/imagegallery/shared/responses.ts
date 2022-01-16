import { ApiProperty } from "@nestjs/swagger";
import { ImageGallerySchema } from "../../../../services"
import * as Shared from "../../../../shared"

export class ImageGalleryCreateResponse {

  @ApiProperty({
    example: { ...Shared.Stub.ImageGalllery.imageGallery() }
  })
  imageGallery: ImageGallerySchema.ImageGallery;

}