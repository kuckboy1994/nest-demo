import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, UserController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
