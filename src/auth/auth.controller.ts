import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('sign-up')
    signUp(@Body() authDto:AuthDto) {
        return this.authService.signUp(authDto);
    }
    @UseGuards(JwtAuthGuard)
    @Post('sign-in')
    signIn(@Body() authDto:AuthDto) {
        return this.authService.signIn(authDto);
    }
}
