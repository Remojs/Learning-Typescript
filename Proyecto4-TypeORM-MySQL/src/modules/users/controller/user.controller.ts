import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Post,
} from '@nestjs/common';
import { createUserDTO } from 'src/dto/create-user.dto';
import { UsersService } from '../services/user.service';
import { User } from '../entitys/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseArrayPipe) id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() newUser: createUserDTO) {
    return this.usersService.createUser(newUser);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseArrayPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
