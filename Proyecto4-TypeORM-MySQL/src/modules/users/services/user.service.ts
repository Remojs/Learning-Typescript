import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entitys/user.entity';
import { Repository } from 'typeorm';
import { createUserDTO } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user: createUserDTO) {
    const newUser = this.userRepository.create(user);
    this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }
}
