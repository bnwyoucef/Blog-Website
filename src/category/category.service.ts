import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryDto } from './dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService){}

    getAllCategories() {
        try {
            const categories = this.prisma.category.findMany();
            return categories;
        } catch (error) {
            return error.message;
        }
    }

    createCategory(categoryName:string) {
        try {
            const category = this.prisma.category.create({
                data: {
                    name:categoryName
                }
            });  
            return {'new-category':category}; 
        } catch (error) {
            return error.message;
        }
    }

    deleteCategory(id:number) {
        try {
            const category = this.prisma.category.delete({
                where: {
                    id:id
                }
            })
            return category;
        } catch (error) {
            return error.message;
        }
    }

    updateCategory(newCateg:CategoryDto) {
        try {
            const category = this.prisma.category.update({
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
