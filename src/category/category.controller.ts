import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post('create-category')
    createCategory(@Body() name: string) {
        return this.categoryService.createCategory(name);
    }

    @Get('all-categories')
    getAllCategories() {
        return this.categoryService.getAllCategories();
    }

    @Delete('delete-category')
    deleteCategory(@Body() id: number) {
        return this.categoryService.deleteCategory(id);
    }

    @Patch('update-category')
    updateCategory(@Body() category: CategoryDto) {
        return this.categoryService.updateCategory(category);
    }

}
