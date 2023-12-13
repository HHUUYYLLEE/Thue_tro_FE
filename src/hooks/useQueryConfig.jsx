import omitBy from 'lodash/omitBy'

import { isUndefined } from 'lodash'
import useQueryParams from './useQueryParam'
import { minPrice, minArea, defaultAreaRight, defaultPriceRight } from '../utils/env'
export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '5',
      search: queryParams.search,
      address: queryParams.address,
      type: queryParams.type,
      sort: queryParams.sort || '1',
      price_min: queryParams.price_min || minPrice,
      price_max: queryParams.price_max || defaultPriceRight,
      area_min: queryParams.area_min || minArea,
      area_max: queryParams.area_max || defaultAreaRight,
      is_have_parking_lot: queryParams.is_have_parking_lot,
      is_new: queryParams.is_new,
      is_high_security: queryParams.is_high_security,
      is_have_owner: queryParams.is_have_owner,
      is_have_bed: queryParams.is_have_bed,
      is_have_wardrobe: queryParams.is_have_wardrobe,
      is_have_dinning_table: queryParams.is_have_dinning_table,
      is_have_refrigerator: queryParams.is_have_refrigerator,
      is_have_television: queryParams.is_have_television,
      is_have_kitchen: queryParams.is_have_kitchen,
      is_have_washing_machine: queryParams.is_have_washing_machine,
      number_or_people: queryParams.number_or_people
    },
    isUndefined
  )
  return queryConfig
}
