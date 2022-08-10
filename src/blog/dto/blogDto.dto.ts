import { IsNotEmpty } from "class-validator";


export class BlogDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    article: string;
    @IsNotEmpty()
    authorId: number;
    @IsNotEmpty()
    categoryId: number;
}