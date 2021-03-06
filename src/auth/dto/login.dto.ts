import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: '用户名', example: 'kuckboy' })
  username: string;

  @ApiProperty({ description: '密码', example: '123123' })
  password: string;
}
