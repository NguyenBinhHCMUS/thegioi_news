import omitBy from 'lodash/omitBy'

import useQueryParams from 'src/hooks/useQueryParams'
import { QueryCategoriesConfig } from './types'
import { isUndefined } from 'lodash'

export default function useQueryCategoriesConfig() {
  const queryParams: QueryCategoriesConfig = useQueryParams()

  const initialQueryCategoryConfig = {
    page: queryParams.page || '1',
    limit: queryParams.limit || '10'
  }
  const queryConfig: QueryCategoriesConfig = omitBy(initialQueryCategoryConfig, isUndefined)
  return queryConfig
}
