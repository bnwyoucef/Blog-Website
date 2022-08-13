import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";


export class ProfileDto {
    @IsOptional()
    userName: string;
    @IsOptional()
    bio: string;
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}