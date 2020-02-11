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
import { CreatePostDto, PostDto } from './createPost.dto';
import { postModel } from './post.model';

@Controller('post')
@ApiTags('帖子')
export class PostController {
  @Get()
  @ApiOperation({ summary: '显示帖子列表' })
  async index() {
    return await postModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    await postModel.create(createPostDto);
    return {
      success: true,
      data: createPostDto,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '获取帖子详情' })
  async getPost(@Param('id') id: string) {
    return await postModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async updatePost(
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return await postModel.findByIdAndUpdate(id, createPostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async removePost(@Param('id') id: string) {
    postModel.findByIdAndRemove(id);
    return {
      success: true,
    };
  }
}
