import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import {ResponseNotFound} from '../common/entities/response-not-found'
import { ResponseOperationSuccess } from "../common/entities/response-operation-success";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({operationId: "createUser"})
  @ApiResponse({
    status: 201,
    description: 'Newly created user',
    type: User,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({operationId: "getUsers"})
  @ApiResponse({
    status: 200,
    description: 'A list of users',
    type: User,
    isArray: true
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({operationId: "getUser"})
  @ApiResponse({
    status: 200,
    description: 'A single user record',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: "User not found",
    type: ResponseNotFound
  })
  findOne(@Param('id') id: string, @Res() res: Response) {
    const user = this.usersService.findOne(+id)
    if (user) {
      res.status(HttpStatus.OK).json(user)
      return
    }
    const notFoundError: ResponseNotFound = {
      type: "error",
      message: "Could not find the user",
      code: 1
    }
    res.status(HttpStatus.NOT_FOUND).json(notFoundError)
  }


  @Patch(':id')
  @ApiOperation({operationId: "updateUser"})
  @ApiResponse({
    status: 200,
    description: 'Updated single user record',
    type: User,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({operationId: "deleteUser"})
  @ApiResponse({
    status: 200,
    description: 'Deleted single user record',
    type: ResponseOperationSuccess,
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
