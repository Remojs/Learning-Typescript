import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  createUser(@Body() newUser: createUserDTO) {
    return this.usersService.createUser(newUser);
  }
}
