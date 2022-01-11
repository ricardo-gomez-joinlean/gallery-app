import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { ModelTemplate } from '../../shared'

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User extends ModelTemplate {

  @Prop()
  email: string; 

  @Prop()
  password?: string

  @Prop()
  name: string;
  
  @Prop()
  lastname: string;

  @Prop()
  birthdate: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
