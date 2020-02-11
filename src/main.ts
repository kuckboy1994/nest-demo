import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static',
  });

  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  await app.listen(3000);

  // const app2 = await NestFactory.create(AppModule);
  // await app2.listen(3001);
}
bootstrap();
