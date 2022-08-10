import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService){}

    @Post('create')
    createBlog(@Body() dto: BlogDto) {
        return this.blogService.createBlog(dto);
    }

    @Get('all-blogs')
    getAllBlogs() {
        return this.blogService.getAllBlogs();
    }
    
    @Delete('deleteBlog')
    deleteBlog(@Body() id: number) {
        return this.blogService.deleteBlog(id);
    }

    @Patch('updateBlog')
    updateBlog(@Body() dto:BlogDto) {
        return this.blogService.updateBlog(dto);
    }
}
