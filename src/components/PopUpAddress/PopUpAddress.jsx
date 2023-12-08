import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getDistrict } from '../../api/address.api'
import PopUpAddressItem from './PopUpAdresssItem'

export default function PopUpAddress() {
  const { data } = useQuery({
    queryKey: ['district'],
    queryFn: () => {
      return getDistrict()
    },
    placeholderData: keepPreviousData
  })

  const districts = data?.data?.districts
  // console.log(districts)
  return (
    <div className='relative'>
      <div className='z-50 bg-white divide-y h-[18rem] overflow-y-auto example divide-gray-100 border border-black shadow w-64 '>
        <ul className=''>
          {districts &&
            districts.map((district) => {
              return <PopUpAddressItem key={district._id} district={district} />
            })}
        </ul>
      </div>
    </div>
  )
}
