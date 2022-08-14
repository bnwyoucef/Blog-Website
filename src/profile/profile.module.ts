import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [MulterModule.register({
    dest : './uploads'
  })],
  controllers: [ProfileController,],
  providers: [ProfileService]
})
export class ProfileModule {}
