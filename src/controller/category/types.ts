export interface ICategoryModel {
  id: string
  title: string
}

export interface CategoriesConfig {
  page?: number | string
  limit?: number | string
}

export type QueryCategoriesConfig = {
  [key in keyof CategoriesConfig]: string
}
