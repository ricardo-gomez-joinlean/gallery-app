import { Prop, Schema } from '@nestjs/mongoose'

@Schema()
export class ModelTemplate {
 
  @Prop({ default: false })
  isDeleted: boolean;

}