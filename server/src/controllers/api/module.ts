import { Module } from "@nestjs/common";

import { UserModule } from "./users"
import { ImageGalleryModule } from "./imagegallery"

@Module({
  imports: [ UserModule, ImageGalleryModule ]
})
export class ApiRoutesModule {}