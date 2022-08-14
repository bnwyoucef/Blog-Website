import { Body, Controller, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileDto } from './dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}

    @Post('create-profile')
    createProfile(@Body() profile: ProfileDto) {
        return this.profileService.createProfile(profile);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))   
    uploadImage(@UploadedFile() file,@Body() obj:any){
        return this.profileService.storeImageName(file.filename,parseInt(obj.userId));
    }

    //get profile image by the full link and the image name in the end
    @Get('/images/:img_name')
    getImage(@Param('img_name') image:string,@Res() res) {
        return res.sendFile(image, {root: 'uploads'})
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
