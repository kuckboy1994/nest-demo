import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '标题' })
  @IsNotEmpty({ message: '请填写标题' })
  @IsString()
  title: string;
  @ApiProperty({ description: '帖子内容', example: '内容' })
  @IsString()
  content: string;
}

export class PostDto {
  @ApiProperty({ description: 'id' })
  id: string;
  @ApiProperty({ description: '帖子标题' })
  title: string;
  @ApiProperty({ description: '帖子内容' })
  content: string;
}
