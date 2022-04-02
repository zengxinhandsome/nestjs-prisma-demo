import { Controller, Get, Post, Query } from '@nestjs/common';
import { PageDto, PostDto } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('list')
  getPostList(@Query() params: PageDto) {
    return this.postService.getPostList(params);
  }

  @Post('create')
  createPost() {
    return this.postService.createPost();
  }
}
