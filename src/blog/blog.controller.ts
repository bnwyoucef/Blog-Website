import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlogService } from './blog.service';
import { BlogDto, BlogUpdateDto } from './dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService){}

    @Post('create')
    @UseInterceptors(FileInterceptor('file'))
    createBlog(@Body() dto: BlogDto,@UploadedFile() file: Express.Multer.File) {
        if(file) return this.blogService.createBlog(dto,file.filename);
        else return this.blogService.createBlog(dto,"null");
    }

    @Get('file/:imageName')
    getBlogImage(@Param('imageName') imageName: string,@Res() res) {
        res.sendFile(imageName,{ root: 'uploads/blog-imgs'});
    }

    @Get('all-blogs')
    getAllBlogs() {
        return this.blogService.getAllBlogs();
    }
    
    @Delete('deleteBlog')
    deleteBlog(@Body() obj: any) {
        return this.blogService.deleteBlog(obj.id);
    }

    @Patch('updateBlog')
    updateBlog(@Body() dto:BlogUpdateDto) {
        return this.blogService.updateBlog(dto);
    }
}
