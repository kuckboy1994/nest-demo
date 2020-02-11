import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @Render('default/news')
  index() {
    return {
      newsList: this.newsService.findAll(),
    };
  }
}
