import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Post } from "./schema"

@Injectable()
export class PostService { 

  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>
  ) {}

}