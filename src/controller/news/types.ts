export interface INewsModel {
  id: string
  _id: string
  original_id: string
  original_url: string
  title: string
  author: string
  avatar: string
  avatar_desc: string
  sapo: string
  content: string
  scraped_time: string
}

export interface INewsAllResponse {
  docs: INewsModel[]
  totalDocs: number
}

export interface IQueryNewsConfig {
  page?: number | string
  limit?: number | string
}

export type QueryNewsConfig = {
  [key in keyof IQueryNewsConfig]: string
}
