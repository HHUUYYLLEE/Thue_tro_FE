import { useContext, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Switch from 'react-switch'
import { displayNum } from '../../utils/utils'
import { AppContext } from '../../contexts/app.context'
import useQueryConfig from '../../hooks/useQueryConfig'
import { minPrice, minArea, defaultAreaRight, defaultPriceRight } from '../../utils/env'
export default function SidebarFilter() {
  const queryConfig = useQueryConfig()
  const maxPrice = 10000000,
    maxArea = 500
  const [sliderPriceRight, setSliderPriceRight] = useState(
    queryConfig?.price_max !== undefined ? parseInt(queryConfig.price_max) : defaultPriceRight
  )
  const [sliderPriceLeft, setSliderPriceLeft] = useState(
    queryConfig?.price_min !== undefined ? parseInt(queryConfig.price_min) : minPrice
  )
  const [sliderAreaRight, setSliderAreaRight] = useState(
    queryConfig?.area_max !== undefined ? parseInt(queryConfig.area_max) : defaultAreaRight
  )
  const [sliderAreaLeft, setSliderAreaLeft] = useState(
    queryConfig?.area_min !== undefined ? parseInt(queryConfig.area_min) : minArea
  )
  const [parklingLotToggle, setParkingLotToggle] = useState(
    queryConfig?.is_have_parking_lot !== undefined ? queryConfig.is_have_parking_lot === 'true' : false
  )
  const [newToggle, setNewToggle] = useState(queryConfig?.is_new !== undefined ? queryConfig.is_new === 'true' : false)
  const [highSecurityToggle, setHighSecurityToggle] = useState(
    queryConfig?.is_high_security !== undefined ? queryConfig.is_high_security === 'true' : false
  )
  const [haveOwner, setHaveOwner] = useState(
    queryConfig?.is_have_owner !== undefined ? queryConfig.is_have_owner === 'true' : false
  )
  const [haveBed, setHaveBed] = useState(
    queryConfig?.is_have_bed !== undefined ? queryConfig.is_have_bed === 'true' : false
  )
  const [haveWardrobe, setHaveWardrobe] = useState(
    queryConfig?.is_have_wardrobe !== undefined ? queryConfig.is_have_wardrobe === 'true' : false
  )
  const [haveDiningTable, setHaveDiningTable] = useState(
    queryConfig?.is_have_dinning_table !== undefined ? queryConfig.is_have_dinning_table === 'true' : false
  )
  const [haveRefrigerator, setHaveRefrigerator] = useState(
    queryConfig?.is_have_refrigerator !== undefined ? queryConfig.is_have_refrigerator === 'true' : false
  )
  const [haveTV, setHaveTV] = useState(
    queryConfig?.is_have_television !== undefined ? queryConfig.is_have_television === 'true' : false
  )
  const [haveKitchen, setHaveKitchen] = useState(
    queryConfig?.is_have_kitchen !== undefined ? queryConfig.is_have_kitchen === 'true' : false
  )
  const [haveWashingMachine, setHaveWashingMachine] = useState(
    queryConfig?.is_have_washing_machine !== undefined ? queryConfig.is_have_washing_machine === 'true' : false
  )

  const toggles = [
    {
      id: 1,
      label: 'Khu vực để xe',
      state: parklingLotToggle,
      setState: setParkingLotToggle,
      queryKey: 'is_have_parking_lot'
    },
    {
      id: 2,
      label: 'Mới',
      state: newToggle,
      setState: setNewToggle,
      queryKey: 'is_new'
    },
    {
      id: 3,
      label: 'An ninh cao',
      state: highSecurityToggle,
      setState: setHighSecurityToggle,
      queryKey: 'is_high_security'
    },
    {
      id: 4,
      label: 'Chung chủ',
      state: haveOwner,
      setState: setHaveOwner,
      queryKey: 'is_have_owner'
    }
  ]
  const checks = [
    {
      id: 1,
      label: 'Giường',
      state: haveBed,
      setState: setHaveBed,
      count: 22222,
      queryKey: 'is_have_bed'
    },
    {
      id: 2,
      label: 'Tủ quần áo',
      state: haveWardrobe,
      setState: setHaveWardrobe,
      count: 22222,
      queryKey: 'is_have_wardrobe'
    },
    {
      id: 3,
      label: 'Bàn ăn',
      state: haveDiningTable,
      setState: setHaveDiningTable,
      count: 22222,
      queryKey: 'is_have_dinning_table'
    },
    {
      id: 4,
      label: 'Tủ lạnh',
      state: haveRefrigerator,
      setState: setHaveRefrigerator,
      count: 22222,
      queryKey: 'is_have_refrigerator'
    },
    {
      id: 5,
      label: 'Tivi',
      state: haveTV,
      setState: setHaveTV,
      count: 22222,
      queryKey: 'is_have_television'
    },
    {
      id: 6,
      label: 'Bếp núc',
      state: haveKitchen,
      setState: setHaveKitchen,
      count: 22222,
      queryKey: 'is_have_kitchen'
    },
    {
      id: 7,
      label: 'Máy giặt',
      state: haveWashingMachine,
      setState: setHaveWashingMachine,
      count: 22222,
      queryKey: 'is_have_wasing_machine'
    }
  ]
  const [currentNumOfPeople, setCurrentNumOfPeople] = useState(
    queryConfig?.number_or_people !== undefined ? parseInt(queryConfig?.number_or_people) : 0
  )

  const numOfPeople = [
    {
      label: '1 người',
      value: 1,
      count: 22222
    },
    {
      label: '2 người',
      value: 2,
      count: 22222
    },
    {
      label: '3 người',
      value: 3,
      count: 22222
    },
    {
      label: '4 người',
      value: 4,
      count: 22222
    },
    {
      label: '5 người',
      value: 5,
      count: 22222
    },
    {
      label: '>5 người',
      value: 6,
      count: 22222
    }
  ]
  const { setValueQuery } = useContext(AppContext)

  return (
    <>
      <div className='border-y-2 mt-[0.5rem]'>
        <div className='my-[0.5rem] text-lg font-andika'>Giá</div>
        <div className='text-[1rem] grid grid-cols-7'>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderPriceLeft)}</div>
          </div>
          <div className='row-start-1 col-span-1 m-auto'>-</div>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderPriceRight)}</div>
          </div>
        </div>
        <Slider
          range
          allowCross={false}
          className='mt-[1rem] mb-[1.5rem]'
          value={[sliderPriceLeft, sliderPriceRight]}
          step={10000}
          min={minPrice}
          max={maxPrice}
          defaultValue={[minPrice, defaultPriceRight]}
          onChange={([value1, value2]) => {
            setSliderPriceLeft(value1)
            setSliderPriceRight(value2)
            setValueQuery((prev) => ({ ...prev, price_min: value1, price_max: value2 }))
          }}
          styles={{
            track: { backgroundColor: 'black', height: '0.7rem' },
            handle: { backgroundColor: 'black', height: '1.25rem', width: '1.25rem', borderColor: 'black' },
            rail: { backgroundColor: 'grey', height: '0.5rem', opacity: '30%' }
          }}
        ></Slider>
      </div>
      <div className='border-y-2 pb-[1.5rem]'>
        <div className='my-[0.5rem] text-lg font-andika'>Diện tích</div>
      </div>
      <div className='border-b-2 mt-[3rem]'>
        <div className='text-[1rem] grid grid-cols-7 mt-[2rem]'>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderAreaLeft) + 'm2'}</div>
          </div>
          <div className='row-start-1 col-span-1 m-auto'>-</div>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderAreaRight) + 'm2'}</div>
          </div>
        </div>
        <Slider
          range
          allowCross={false}
          className='mt-[1rem] mb-[1.5rem]'
          value={[sliderAreaLeft, sliderAreaRight]}
          step={1}
          min={minArea}
          max={maxArea}
          defaultValue={[minArea, defaultAreaRight]}
          onChange={([value1, value2]) => {
            setSliderAreaLeft(value1)
            setSliderAreaRight(value2)
            setValueQuery((prev) => ({ ...prev, area_min: value1, area_max: value2 }))
          }}
          styles={{
            track: { backgroundColor: 'black', height: '0.7rem' },
            handle: { backgroundColor: 'black', height: '1.25rem', width: '1.25rem', borderColor: 'black' },
            rail: { backgroundColor: 'grey', height: '0.5rem', opacity: '30%' }
          }}
        ></Slider>
      </div>

      <div className='border-y-2 mt-[2rem]'>
        {toggles.map((element) => {
          return (
            <div key={element.id} className='flex justify-between my-[1rem]'>
              <div className='font-andika'>{element.label}</div>
              <Switch
                onChange={(value) => {
                  element.setState(value)
                  setValueQuery((prev) => ({ ...prev, [element.queryKey]: value }))
                }}
                checked={element.state}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor='#000000'
              />
            </div>
          )
        })}
      </div>
      <div className='border-y-2 mt-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Nội thất</div>
        {checks.map((element) => {
          return (
            <div key={element.id} className='flex justify-between my-[1rem]'>
              <div className='flex gap-[1rem]'>
                <input
                  type='checkbox'
                  className='transform scale-150 accent-black'
                  checked={element.state}
                  onChange={(e) => {
                    // console.log(e.target.checked)
                    element.setState(e.target.checked)
                    setValueQuery((prev) => ({ ...prev, [element.queryKey]: e.target.checked }))
                    // console.log(valueQuery)
                  }}
                />
                <div className='font-andika'>{element.label}</div>
              </div>
              <div className='opacity-50'>{element.count}</div>
            </div>
          )
        })}
      </div>
      <div className='border-y-2 mt-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Số lượng người ở</div>
        {numOfPeople.map((element) => {
          return (
            <div key={element.value} className='flex justify-between my-[1rem]'>
              <div className='flex gap-[1rem]'>
                <input
                  type='radio'
                  className='transform scale-150 accent-black'
                  onChange={() => {
                    setCurrentNumOfPeople(element.value)
                    setValueQuery((prev) => ({ ...prev, number_or_people: element.value }))
                  }}
                  checked={currentNumOfPeople === element.value}
                />
                <div className='font-andika'>{element.label}</div>
              </div>
              <div className='opacity-50'>{element.count}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
