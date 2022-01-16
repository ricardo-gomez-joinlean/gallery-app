import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { ModelTemplate } from '../../shared'

export type ImageGalleryDocument = ImageGallery & Document;

@Schema({ timestamps: true })
export class ImageGallery extends ModelTemplate {

  @Prop({ required: true })
  url: string;

  @Prop({ 
    required: true,
    ref: 'users',
  })
  user: string;

}

export const ImageGallerySchema = SchemaFactory.createForClass(ImageGallery);