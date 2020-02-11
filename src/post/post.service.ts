import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post } from './post.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreatePostDto } from './createPost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private readonly postModel: ReturnModelType<typeof Post>,
  ) {}

  // 获取帖子列表
  async getPostList(): Promise<Post[] | null> {
    return await this.postModel.find().exec();
  }

  // 创建帖子
  async create(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postModel.create(createPostDto);
  }

  // 获取单个帖子的信息
  async getPost(id: string): Promise<Post> {
    return await this.postModel.findById(id);
  }

  // 更新帖子的信息
  async updatePost(id: string, createPostDto: CreatePostDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, createPostDto);
  }

  // 删除帖子
  async removePost(id: string): Promise<Post> {
    return await this.postModel.findByIdAndRemove(id);
  }
}
