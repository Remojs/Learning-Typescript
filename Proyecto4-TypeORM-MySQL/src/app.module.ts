import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/controllers/user.controller';
import { UsersService } from './modules/users/services/user.service';
import { UsersModule } from './modules/users/user.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UsersModule],
})
export class AppModule {}
