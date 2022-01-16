import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ImageGalleryService } from "./service"
import { ImageGallery, ImageGallerySchema } from './schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ImageGallery.name, schema: ImageGallerySchema }
    ])
  ],
  providers: [ ImageGalleryService ],
  exports: [ ImageGalleryService ]
})
export class ImageGalleryModule {}