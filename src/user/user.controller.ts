import { Controller, Get, Render, Post, Body, Response } from '@nestjs/common';

@Controller('user')
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
