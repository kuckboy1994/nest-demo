import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';
import { User } from './user.model';
import { DocumentType } from '@typegoose/typegoose';

@Controller('auth')
@ApiTags('权限')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private readonly authModel: AuthService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto;
    return await this.authModel.createUser(username, password);
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @CurrentUser() user: DocumentType<User>) {
    // console.log(req);
    // return req.user;

    return {
      token: this.jwtService.sign(String(user._id)),
    };
  }

  @Get('user')
  @ApiOperation({ summary: '获取用户信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async user(@CurrentUser() user: DocumentType<User>) {
    return user;
  }
}
