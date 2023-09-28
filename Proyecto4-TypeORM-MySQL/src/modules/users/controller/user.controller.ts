import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Patch,
} from "@nestjs/common";
import { createUserDTO } from "src/dto/create-user.dto";
import { UsersService } from "../services/user.service";
import { User } from "../entitys/user.entity";
import { updateUserDTO } from "src/dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(":id")
  getUserById(@Param("id", ParseArrayPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() newUser: createUserDTO) {
    return this.usersService.createUser(newUser);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseArrayPipe) id: number) {
    return this.usersService.deleteUser(id);
  }

  @Patch(":id")
  UpdateUser(
    @Param("id", ParseArrayPipe) id: number,
    @Body() user: updateUserDTO,
  ) {
    return this.usersService.updateUser(id, user);
  }
}
