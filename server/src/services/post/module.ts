import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './service'
import { Post, PostSchema } from './schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema }
    ])
  ],
  providers: [PostService],
  exports: [PostService]
})
export class PostModelModule {}
