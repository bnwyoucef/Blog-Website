import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryDto } from './dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService){}

    async getAllCategories() {
        try {
            const categories = this.prisma.category.findMany();
            return categories;
        } catch (error) {
            return error.message;
        }
    }

    async createCategory(categoryName:string) {
        try {
            const category = await this.prisma.category.create({
                data: {
                    name:categoryName
                }
            });  
            return {'new-category':category}; 
        } catch (error) {
            return error.message;
        }
    }

    async deleteCategory(id:number) {
        try {
            const category = await this.prisma.category.delete({
                where: {
                    id:id
                }
            })
            return category;
        } catch (error) {
            return error.message;
        }
    }

    async updateCategory(newCateg:CategoryDto) {
        try {
            const category = await this.prisma.category.update({
                where: {
                    id:newCateg.id
                },
                data: {
                    name:newCateg.categoryName
                }
            });
            return category;
        } catch (error) {
            return error.message;
        }
    }

}
