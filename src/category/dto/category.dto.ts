import { IsNotEmpty } from "class-validator";


export class CategoryDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    categoryName: string;
}