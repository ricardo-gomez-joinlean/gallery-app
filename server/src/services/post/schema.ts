import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as SchemaMongoose } from 'mongoose'
import { ModelTemplate } from '../../shared'

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post extends ModelTemplate {

  @Prop({ required: false })
  text: string;

  @Prop({ 
    required: true,
    ref: 'users',
    type: SchemaMongoose.Types.ObjectId
  })
  user: string;

  @Prop({
    required: true,
    ref: 'imagegalleries',
    type: SchemaMongoose.Types.ObjectId
  })
  imagesGallery: string[];

}

export const PostSchema = SchemaFactory.createForClass(Post);
