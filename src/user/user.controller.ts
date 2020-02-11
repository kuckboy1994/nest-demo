import { Controller, Get, Render, Post, Body, Response } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户相关')
export class UserController {
  @Get()
  @Render('default/user')
  index() {
    return { name: 'kuckboy' };
  }

  @Post('add')
  add(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/user');
    // return '增加成功';
  }
}
