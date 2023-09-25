import { Body, Controller, Post } from '@nestjs/common';
import { createUserDTO } from 'src/dto/create-user.dto';
import { UsersService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() newUser: createUserDTO) {
    return this.usersService.createUser(newUser);
  }
}
