import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePostDTO } from "src/dto/create-post.dto";
import { PostService } from "../services/post.service";

@Controller("posts")
export class PostController {
  constructor(private postsService: PostService) {}

  @Post()
  createPost(@Body() post: CreatePostDTO) {
    return this.postsService.createPost(post);
  }

  @Get()
  getPost() {
    this.postsService.getPost();
  }
}
