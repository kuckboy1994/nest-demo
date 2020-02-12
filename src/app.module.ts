import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: 'asdjkljlkajsdlk',
        };
      },
    }),
    TypegooseModule.forRoot('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PostModule,
    AuthModule,
  ],
  controllers: [AppController, CatsController, UserController, NewsController],
  providers: [AppService, NewsService],
  exports: [JwtModule],
})
export class AppModule {}
