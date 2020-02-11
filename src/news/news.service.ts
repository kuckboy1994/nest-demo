import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll(): object {
    return [
      {
        title: '新闻1',
      },
      {
        title: '新闻2',
      },
      {
        title: '新闻2',
      },
    ];
  }
}
