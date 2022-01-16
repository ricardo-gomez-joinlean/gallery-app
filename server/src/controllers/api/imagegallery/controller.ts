import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";

import * as Services from "../../../services"
import * as Shared from "../../../shared"

import * as ControllerShared from "./shared"

const prefix = "image-gallery"

@ApiTags(prefix)
@Controller(prefix)
export class ImageGalleryController {

  constructor(
    private readonly imageGalleryService: Services.ImageGalleryService,
    private readonly cloudinaryService: Shared.Providers.Cloudinary.CloudinaryService
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: ControllerShared.Responses.ImageGalleryCreateResponse
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() dto: Shared.Dto.ImageGallery.ImageGalleryCreateDto,
    @UploadedFile() file: any 
  ): Promise<ControllerShared.Responses.ImageGalleryCreateResponse> {

    console.log(dto);

    if (file) {
      const cloudinaryResp = await this.cloudinaryService
        .upload(file, '/imagegallery');

      dto.url = cloudinaryResp.public_id;
    }

    console.log(dto)

    const imageGallerydb = await this.imageGalleryService.create(dto);

    return {
      imageGallery: imageGallerydb
    }

  }

}