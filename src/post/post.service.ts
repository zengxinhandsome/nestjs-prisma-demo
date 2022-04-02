import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageDto } from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async getPostList(dto: PageDto) {
    console.log({
      dto,
    });

    const page = Number(dto.page);
    const pageSize = Number(dto.pageSize);

    const post = await this.prisma.post.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return post;
  }

  async createPost() {
    let list = [];
    for (let i = 0; i < 60; i++) {
      list.push({
        title: '这是第' + i + '篇文章',
        text: '这是第' + i + '篇文章的内容',
      });
    }

    // const newList = await this.prisma.post.createMany({
    //   data: list,
    // });

    // return newList;
  }
}
