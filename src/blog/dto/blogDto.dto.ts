import { IsNotEmpty, IsOptional } from "class-validator";


export class BlogDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    article: string;
    @IsNotEmpty()
    authorId: string;
    @IsNotEmpty()
    categoryId: string;
}

export class BlogUpdateDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsOptional()
    title: string;

    @IsNotEmpty()
    @IsOptional()
    article: string;

    @IsNotEmpty()
    @IsOptional()
    categoryId: number;
}