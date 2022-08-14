import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlogDto, BlogUpdateDto } from './dto';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService){}

    async getAllBlogs() {
        const blogs = await this.prisma.blog.findMany()
        return blogs;
    }

    async createBlog(blogDto: BlogDto,fileName: string) {
        try {
            const blog = await this.prisma.blog.create({
                data: {
                    title: blogDto.title,
                    article: blogDto.article,
                    authorId: parseInt(blogDto.authorId),
                    categoryId: parseInt(blogDto.categoryId),
                    imageName: fileName
                }
            })
            return {newBlog:blog};
        } catch (error) {
            return error.message;
        }
    }

    async deleteBlog(id: number) {
        try {
            const blog = await this.prisma.blog.delete({
                where: {
                    id: id
                }
            });
            return blog;  
        } catch (error) {
            return error.message;
        }
    }

    async updateBlog(blogDto: BlogUpdateDto) {
        let blog = {};
        if(blogDto.title) {
            blog = await this.prisma.blog.update({
                where: {
                    id: blogDto.id
                },
                data: {
                    title: blogDto.title
                }
            })
        }

        if(blogDto.article) {
            blog = await this.prisma.blog.update({
                where: {
                    id: blogDto.id
                },
                data: {
                    article: blogDto.article
                }
            })
        }
        
        if(blogDto.categoryId) {
            blog = await this.prisma.blog.update({
                where: {
                    id: blogDto.id
                },
                data: {
                    categoryId: blogDto.categoryId
                }
            })
        }
        return blog;
    }

}
