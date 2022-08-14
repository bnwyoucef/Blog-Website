import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, BlogModule, CategoryModule, ProfileModule,
    MulterModule.register({
      dest: './uploads'
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
