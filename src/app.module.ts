import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
    }),
    PostModule,
  ],
  controllers: [AppController, CatsController, UserController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
