import { Module } from "@nestjs/common";
import { ImageGalleryController } from "./controller"
import * as Services from "../../../services"
import * as Shared from "../../../shared"

@Module({
  imports: [
    Services.ImageGalleryModule,
    Shared.Providers.Cloudinary.CloudinaryModule
  ],
  controllers: [ ImageGalleryController ]
})
export class ImageGalleryModule {}