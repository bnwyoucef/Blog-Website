import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlogDto } from './dto';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService){}

    getAllBlogs() {
        const blogs = this.prisma.blog.findMany()
        return blogs;
    }

    async createBlog(blogDto: BlogDto) {
        console.log("blog:",blogDto);
        
        try {
            const blog = await this.prisma.blog.create({
                data: {
                    title: blogDto.title,
                    article: blogDto.article,
                    authorId: blogDto.authorId,
                    categoryId: blogDto.categoryId,
                }
            })
            return {newBlog:blog};
        } catch (error) {
            return error;
        }
    }

    deleteBlog(id: number) {}
    updateBlog(blogDto: BlogDto) {}
}
