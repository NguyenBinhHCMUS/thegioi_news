import { DiContainer } from 'src/cores/di-container.core'
import { inject, injectable } from 'tsyringe'
import { TokenNewsService, type INewsService } from './news.service'
import { INewsAllResponse, INewsModel, IQueryNewsConfig } from './types'

export interface IAppController {
  getNewsAll(params: IQueryNewsConfig): Promise<INewsAllResponse | undefined>
  getNews(id: string): Promise<INewsModel | undefined>
}

export const TokenNewsController = DiContainer.defineToken<IAppController>('news-controller')

@injectable()
@DiContainer.autoRegisterSingleton(TokenNewsController)
export class NewsController implements IAppController {
  constructor(
    @inject(TokenNewsService)
    private newsService: INewsService
  ) {}

  async getNewsAll(params: IQueryNewsConfig): Promise<INewsAllResponse | undefined> {
    return await this.newsService.getNewsAll(params)
  }

  async getNews(id: string): Promise<INewsModel | undefined> {
    return await this.newsService.getNews(id)
  }
}
