import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entitys/user.entity";
import { Repository } from "typeorm";
import { createUserDTO } from "src/dto/create-user.dto";
import { updateUserDTO } from "src/dto/update-user.dto";
import { CreateProfileDTO } from "src/dto/create-profile.dto";
import { Profile } from "../entitys/profile.entity";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  createUser(user: createUserDTO) {
    const userFound = this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userFound) {
      return new HttpException("Ya existe ese nombre", HttpStatus.CONFLICT);
    }
    const newUser = this.userRepository.create(user);
    this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    const userFound = await this.userRepository.findOne({
      where: { id: id },
      relations: ["posts"],
    });
    if (!userFound) {
      return new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }
    return userFound;
  }

  async deleteUser(id: number) {
    const userFound = await this.userRepository.findOne({ where: { id: id } });
    if (!userFound) {
      return new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }
    return this.userRepository.delete({ id });
  }

  async updateUser(id: number, user: updateUserDTO) {
    const userFound = await this.userRepository.findOne({ where: { id } });
    if (!userFound) {
      return new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }
    const updateUser = Object.assign(userFound, user);
    return this.userRepository.save(updateUser);
  }

  async createProfile(id: number, profile: CreateProfileDTO) {
    const userFound = await this.userRepository.findOne({ where: { id } });
    if (!userFound) {
      return new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }
    const newProfile = this.profileRepository.create(profile);
    const savedProfile = await this.profileRepository.save(newProfile);
    userFound.profile = savedProfile;
    return this.userRepository.save(userFound);
  }
}
