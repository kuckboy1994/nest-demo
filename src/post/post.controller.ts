import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './createPost.dto';
import { PostService } from './post.service';

@Controller('post')
@ApiTags('帖子')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOperation({ summary: '显示帖子列表' })
  async getPostList() {
    return await this.postService.getPostList();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    await this.postService.create(createPostDto);
    return {
      success: true,
      data: createPostDto,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '获取帖子详情' })
  async getPost(@Param('id') id: string) {
    return await this.postService.getPost(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async updatePost(
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return await this.postService.updatePost(id, createPostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async removePost(@Param('id') id: string) {
    this.postService.removePost(id);
    return {
      success: true,
    };
  }
}
