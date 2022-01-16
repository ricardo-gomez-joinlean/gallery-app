import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ImageGallery } from "./schema"

import * as Shared from "../../shared"

@Injectable()
export class ImageGalleryService {

  constructor(
    @InjectModel(ImageGallery.name) private readonly imageGalleryModel: Model<ImageGallery>
  ) {}

  async create(dto: Shared.Dto.ImageGallery.ImageGalleryCreateDto) {
    return new this.imageGalleryModel(dto).save();
  }

  async findByUser() {}

}