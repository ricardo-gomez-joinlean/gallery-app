import { BadRequestException, Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";

import { UserSchema, UserService } from "../../../services"
import * as Shared from "../../../shared"

import * as ContollerShared from "./shared"

const prefix = "users";

@ApiTags(prefix)
@Controller(prefix)
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly cloudinaryService: Shared.Providers.Cloudinary.CloudinaryService
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: ContollerShared.Response.UserCreateResponse
  })
  async create(
    @Body() dto: Shared.Dto.User.UserCreateOrUpdateDto
  ): Promise<ContollerShared.Response.UserCreateResponse> {
    
    const user = await this.userService.create(dto);

    return {
      user
    };

  }

  @Get()
  @ApiResponse({
    status: 200,
    type: ContollerShared.Response.UserFindAllResponse
  })
  async findAll(): Promise<ContollerShared.Response.UserFindAllResponse> {
    
    const users = await this.userService.find() as UserSchema.User[];

    return {
      users
    };

  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: ContollerShared.Response.UserFindOneResponse
  })
  async findOne(
    @Param('id') id: string
  ): Promise<ContollerShared.Response.UserFindOneResponse> {
    
    const user = await this.userService.findOne(id);

    return {
      user
    }

  }

  @Put('/:id')
  @ApiResponse({
    status: 202,
    type: ContollerShared.Response.UserUpdateResponse
  })
  async updateOne(
    @Param('id') id: string,
    @Body() dto: Shared.Dto.User.UserCreateOrUpdateDto
  ): Promise<ContollerShared.Response.UserUpdateResponse> {
    
    const user = await this.userService.update(id, dto);

    return {
      user
    }

  }

  @Post('/change-password')
  @ApiResponse({
    status: 202,
    type: ContollerShared.Response.UserChangePasswordResponse
  })
  async changePassword(
    @Body() dto: Shared.Dto.User.UserChangePasswordDto
  ): Promise<ContollerShared.Response.UserChangePasswordResponse> {
    
    const isChanged = await this.userService.changePassword(dto);

    return {
      isChanged
    }

  } 

  @Put('/change-avatar/:id')
  @ApiResponse({
    status: 200,
    type: ContollerShared.Response.UserUpdateAvatarImgResponse
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatarImg(
    @Body() dto: Shared.Dto.User.UserUpdateAvatarImgDto,
    @UploadedFile() file: any,
    @Param('id') id: string
  ): Promise<ContollerShared.Response.UserUpdateAvatarImgResponse> {

    if ( file ) {

      const cloudinaryResp = await this.cloudinaryService.upload(file, '/user/avatar');

      dto.url = cloudinaryResp.public_id;

    }

    const userDB = await this.userService.updateAvatarImage(id, dto.url);;

    if ( !userDB )
      throw new BadRequestException('cant update the user');
    
    return {
      isChanged: true
    }

  }

  @Post('/auth')
  @ApiResponse({
    status: 200,
    type: ContollerShared.Response.UserAuthResponse
  })
  async auth(
    @Body() dto: Shared.Dto.User.UserAuthDto
  ): Promise<ContollerShared.Response.UserAuthResponse> {
    
    const token = await this.userService.auth(dto.email, dto.password);

    return {
      token
    }

  }


}