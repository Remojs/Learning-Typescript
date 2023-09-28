import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./entitys/post.entity";
import { UsersModule } from "../users/user.module";
import { PostController } from "./controllers/post.controller";
import { PostService } from "./services/post.service";

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
