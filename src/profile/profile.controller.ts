import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProfileDto } from './dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}

    @Post('create-profile')
    createProfile(@Body() profile: ProfileDto) {
        return this.profileService.createProfile(profile);
    }

    @Get('get-profile')
    getUserProfile(@Body() profile: any) {
        return this.profileService.getUserProfile(profile.userId);
    }

    @Patch('update-profile')
    updateUserProfile(@Body() profile:ProfileDto) {
        return this.profileService.updateUserProfile(profile)
    }
}
