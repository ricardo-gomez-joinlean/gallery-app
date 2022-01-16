import * as mongoose from "mongoose"
import { ImageGallerySchema } from "../../services"

export const imageGallery = (): ImageGallerySchema.ImageGallery => {
  return {
    url: 'https://example.com',
    isDeleted: false,
    user: new mongoose.Types.ObjectId().toHexString()
  }
}