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
    type: Response.Create
  })
  async create(
    @Body() dto: Dto.User.CreateOrUpdate
  ): Promise<Response.Create> {
    
    const user = await this.userService.create(dto);

    return {
      user
    };

  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Response.FindAll
  })
  async findAll(): Promise<Response.FindAll> {
    
    const users = await this.userService.find() as UserModel.User[];

    return {
      users
    };

  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: Response.FindOne
  })
  async findOne(
    @Param('id') id: string
  ): Promise<Response.FindOne> {
    
    const user = await this.userService.findOne(id);

    return {
      user
    }

  }

  @Put('/:id')
  @ApiResponse({
    status: 202,
    type: Response.Update
  })
  async updateOne(
    @Param('id') id: string,
    @Body() dto: Dto.User.CreateOrUpdate
  ): Promise<Response.Update> {
    
    const user = await this.userService.update(id, dto);

    return {
      user
    }

  }

}