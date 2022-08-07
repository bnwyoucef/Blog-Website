import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2'
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    async signUp(authDto:AuthDto) {
        const hash = await argon.hash(authDto.password);

        try {
            const user = await this.prisma.user.create({
                data: {
                    email: authDto.email,
                    password: hash
                }
            });
            const {password, ...result} = user;
            return result;
        } catch (error) {
            return "Email exist!";
        }
      
    }

    async signIn(authDto:AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: authDto.email
            }
        })
        if(!user) return "Wrong credentials!"
        const pswrdMatch = await argon.verify(user.password,authDto.password);
        if(pswrdMatch) {
            const {password, ...result} = user;
            return result;
        }
        else return "Wrong credential!"

    }

}
