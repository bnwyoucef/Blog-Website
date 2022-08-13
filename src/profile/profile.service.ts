import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProfileDto } from './dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService){}

    async createProfile(userProfile: ProfileDto) {
        try {
            const profile = await this.prisma.profile.create({
                data:{
                    userName: userProfile.userName,
                    bio: userProfile.bio,
                    userId: userProfile.userId
                }
            });
            return profile;  
        } catch (error) {
            return error.message;
        }
    }

    async getUserProfile(userId: number) {
        try {
            const profile = await this.prisma.profile.findUnique({
                where: {
                    userId: userId
                }
            });
            return profile;
        } catch (error) {
            return error.message;
        }
    }

    async updateUserProfile(newProfile:ProfileDto) {
        console.log(newProfile);
        
        let updatedProfile = {};
        if(newProfile.userName) {
            try {
                updatedProfile = await this.prisma.profile.update({
                    where: {
                        userId: newProfile.userId
                    },
                    data:{
                        userName: newProfile.userName
                    }
                });  
            } catch (error) {
                return error.message;
            }
        }

        if(newProfile.bio) {
            try {
                updatedProfile = await this.prisma.profile.update({
                    where: {
                        userId: newProfile.userId
                    },
                    data:{
                        bio: newProfile.bio
                    }
                });
            } catch (error) {
                return error.message;
            }
        }
        return updatedProfile;  
    }
}
