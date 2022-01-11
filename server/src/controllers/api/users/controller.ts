import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserModel } from "../../../schemas";

import { UserService } from "../../../services"
import { Dto } from "../../../shared"

import { Response } from "./shared"

const prefix = "users";

@ApiTags(prefix)
@Controller(prefix)
export class UserController {

  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: Response.UserCreateResponse
  })
  async create(
    @Body() dto: Dto.User.UserCreateOrUpdateDto
  ): Promise<Response.UserCreateResponse> {
    
    const user = await this.userService.create(dto);

    return {
      user
    };

  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Response.UserFindAllResponse
  })
  async findAll(): Promise<Response.UserFindAllResponse> {
    
    const users = await this.userService.find() as UserModel.User[];

    return {
      users
    };

  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: Response.UserFindOneResponse
  })
  async findOne(
    @Param('id') id: string
  ): Promise<Response.UserFindOneResponse> {
    
    const user = await this.userService.findOne(id);

    return {
      user
    }

  }

  @Put('/:id')
  @ApiResponse({
    status: 202,
    type: Response.UserUpdateResponse
  })
  async updateOne(
    @Param('id') id: string,
    @Body() dto: Dto.User.UserCreateOrUpdateDto
  ): Promise<Response.UserUpdateResponse> {
    
    const user = await this.userService.update(id, dto);

    return {
      user
    }

  }

  @Post('/change-password')
  @ApiResponse({
    status: 202,
    type: Response.UserChangePasswordResponse
  })
  async changePassword(
    @Body() dto: Dto.User.UserChangePasswordDto
  ): Promise<Response.UserChangePasswordResponse> {
    
    const isChanged = await this.userService.changePassword(dto);

    return {
      isChanged
    }

  } 


}