import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as SchemaMongoose } from 'mongoose'
import { ModelTemplate } from '../../shared'
import { UserSchema } from '../user'

export type ImageGalleryDocument = ImageGallery & Document;

@Schema({ timestamps: true })
export class ImageGallery extends ModelTemplate {

  @Prop({ required: true })
  url: string;

  @Prop({ 
    required: true,
    ref: 'users',
    type: SchemaMongoose.Types.ObjectId
  })
  user: string;

}

export const ImageGallerySchema = SchemaFactory.createForClass(ImageGallery);