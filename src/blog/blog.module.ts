import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [MulterModule.register({
    dest : './uploads/blog-imgs'
  })],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
