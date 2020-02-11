import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as mongoose from 'mongoose';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  /* mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    // useUnifiedTopology: true,
    dbName: 'test',
  }); */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static',
  });

  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  // const app2 = await NestFactory.create(AppModule);
  // await app2.listen(3001);
}
bootstrap();
