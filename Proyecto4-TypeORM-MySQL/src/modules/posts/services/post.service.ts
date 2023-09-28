import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from "src/modules/users/services/user.service";
import { Post } from "../entitys/post.entity";
import { Repository } from "typeorm";
import { CreatePostDTO } from "src/dto/create-post.dto";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async createPost(post: CreatePostDTO) {
    const userFound = await this.usersService.getUserById(post.authorId);
    if (!userFound) {
      new HttpException("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }
    const newPost = this.postsRepository.create(post);
    return await this.postsRepository.save(newPost);
  }

  getPost() {
    return this.postsRepository.find({
      relations: ["author"],
    });
  }
}
