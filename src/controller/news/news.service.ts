import type { AxiosInstance } from 'axios'
import { ErrorApi, TokenAxiosClient } from 'src/cores/api-client.core'
import { DiContainer } from 'src/cores/di-container.core'
import { inject, injectable } from 'tsyringe'
import { INewsAllResponse, INewsModel, IQueryNewsConfig } from './types'

const URL_GET_NEWS = 'news'
const URL_GET_NEWS_LIST = 'news/search'

export const ERROR_MESSAGE_MAP: Record<number, string> = {
  101: 'Invalid email',
  102: 'Invalid password'
}

export interface INewsService {
  getNewsAll(params?: IQueryNewsConfig): Promise<INewsAllResponse>
  getNews(id: string): Promise<INewsModel>
}

export const TokenNewsService = DiContainer.defineToken<INewsService>('news-service')

@injectable()
@DiContainer.autoRegisterSingleton(TokenNewsService)
export class NewsService implements INewsService {
  constructor(
    @inject(TokenAxiosClient)
    private axiosClient: AxiosInstance
  ) {}

  async getNewsAll(body: IQueryNewsConfig): Promise<INewsAllResponse> {
    try {
      const response = await this.axiosClient.post<INewsAllResponse>(URL_GET_NEWS_LIST, {
        skip: body.page,
        limit: body.limit
      })
      return response.data
    } catch (error: any) {
      const code = error.code as number
      throw new ErrorApi(code, ERROR_MESSAGE_MAP[code])
    }
  }

  async getNews(id: string): Promise<INewsModel> {
    try {
      const response = await this.axiosClient.get<INewsModel>(`${URL_GET_NEWS}/${id}`)
      return response.data
    } catch (error: any) {
      const code = error.code as number
      throw new ErrorApi(code, ERROR_MESSAGE_MAP[code])
    }
  }
}
