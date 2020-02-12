import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: ReturnModelType<typeof User>,
  ) {}

  // 注册用户
  async createUser(username: string, password: string): Promise<User | null> {
    return await this.userModel.create({
      username,
      password,
    });
  }

  // 获取用户信息
  async getUserInfo(id: string) {
    return await this.userModel.findById(id);
  }
}
