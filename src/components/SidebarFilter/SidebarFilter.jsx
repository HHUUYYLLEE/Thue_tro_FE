import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Switch from 'react-switch'
import { displayNum } from '../../utils/utils'
export default function SidebarFilter() {
  const minPrice = 0,
    defaultPrice = 5000000,
    minArea = 10,
    defaultArea = 200
  const [sliderPriceRight, setSliderPriceRight] = useState(defaultPrice)
  const [sliderPriceLeft, setSliderPriceLeft] = useState(minPrice)
  const [sliderAreaRight, setSliderAreaRight] = useState(defaultArea)
  const [sliderAreaLeft, setSliderAreaLeft] = useState(minArea)
  const [parklingLotToggle, setParkingLotToggle] = useState(false)
  const [newToggle, setNewToggle] = useState(false)
  const [highSecurityToggle, setHighSecurityToggle] = useState(false)
  const [haveOwner, setHaveOwner] = useState(false)
  const [haveBed, setHaveBed] = useState(false)
  const [haveWardrobe, setHaveWardrobe] = useState(false)
  const [haveDiningTable, setHaveDiningTable] = useState(false)
  const [haveRefrigerator, setHaveRefrigerator] = useState(false)
  const [haveTV, setHaveTV] = useState(false)
  const [haveKitchen, setHaveKitchen] = useState(false)
  const [haveWashingMachine, setHaveWashingMachine] = useState(false)
  const sliders = [
    {
      id: 1,
      label: 'Giá',
      cssStyle: 'mt-[0.5rem]',
      step: 10000,
      min: minPrice,
      max: 10000000,
      default1: minPrice,
      default2: defaultPrice,
      unit: '',
      state1: sliderPriceLeft,
      state2: sliderPriceRight,
      setState1: setSliderPriceLeft,
      setState2: setSliderPriceRight
    },
    {
      id: 2,
      label: 'Diện tích',
      name1: 'minArea',
      name2: 'maxArea',
      cssStyle: 'my-[3rem]',
      step: 1,
      min: minArea,
      max: 500,
      default1: minArea,
      default2: defaultArea,
      unit: 'm2',
      state1: sliderAreaLeft,
      state2: sliderAreaRight,
      setState1: setSliderAreaLeft,
      setState2: setSliderAreaRight
    }
  ]
  const toggles = [
    {
      id: 1,
      label: 'Khu vực để xe',
      state: parklingLotToggle,
      setState: setParkingLotToggle
    },
    {
      id: 2,
      label: 'Mới',
      state: newToggle,
      setState: setNewToggle
    },
    {
      id: 3,
      label: 'An ninh cao',
      state: highSecurityToggle,
      setState: setHighSecurityToggle
    },
    {
      id: 4,
      label: 'Chung chủ',
      state: haveOwner,
      setState: setHaveOwner
    }
  ]
  const checks = [
    {
      id: 1,
      label: 'Giường',
      state: haveBed,
      setState: setHaveBed,
      count: 22222
    },
    {
      id: 2,
      label: 'Tủ quần áo',
      state: haveWardrobe,
      setState: setHaveWardrobe,
      count: 22222
    },
    {
      id: 3,
      label: 'Bàn ăn',
      state: haveDiningTable,
      setState: setHaveDiningTable,
      count: 22222
    },
    {
      id: 4,
      label: 'Tủ lạnh',
      state: haveRefrigerator,
      setState: setHaveRefrigerator,
      count: 22222
    },
    {
      id: 5,
      label: 'Tivi',
      state: haveTV,
      setState: setHaveTV,
      count: 22222
    },
    {
      id: 6,
      label: 'Bếp núc',
      state: haveKitchen,
      setState: setHaveKitchen,
      count: 22222
    },
    {
      id: 7,
      label: 'Máy giặt',
      state: haveWashingMachine,
      setState: setHaveWashingMachine,
      count: 22222
    }
  ]
  const [currentNumOfPeople, setCurrentNumOfPeople] = useState('more5')

  const numOfPeople = [
    {
      id: 1,
      label: '1 người',
      value: 1,
      count: 22222
    },
    {
      id: 2,
      label: '2 người',
      value: 2,
      count: 22222
    },
    {
      id: 3,
      label: '3 người',
      value: 3,
      count: 22222
    },
    {
      id: 4,
      label: '4 người',
      value: 4,
      count: 22222
    },
    {
      id: 5,
      label: '5 người',
      value: 5,
      count: 22222
    },
    {
      id: 6,
      label: '>5 người',
      value: 'more5',
      count: 22222
    }
  ]

  return (
    <>
      {sliders.map((element) => {
        return (
          <div key={element.id} className={`border-y-2 ${element.cssStyle}`}>
            <div className='my-[0.5rem] text-lg font-andika'>{element.label}</div>
            <div className='text-[1rem] grid grid-cols-7'>
              <div className='row-start-1 col-span-3 border-2'>
                <div className='ml-1'>{displayNum(element.state1) + element.unit}</div>
              </div>
              <div className='row-start-1 col-span-1 m-auto'>-</div>
              <div className='row-start-1 col-span-3 border-2'>
                <div className='ml-1'>{displayNum(element.state2) + element.unit}</div>
              </div>
            </div>
            <Slider
              range
              allowCross={false}
              className='mt-[1rem] mb-[1.5rem]'
              value={[element.state1, element.state2]}
              step={element.step}
              min={element.min}
              max={element.max}
              defaultValue={[element.default1, element.default2]}
              onChange={([value1, value2]) => {
                element.setState1(value1)
                element.setState2(value2)
              }}
              styles={{
                track: { backgroundColor: 'black', height: '0.7rem' },
                handle: { backgroundColor: 'black', height: '1.25rem', width: '1.25rem', borderColor: 'black' },
                rail: { backgroundColor: 'grey', height: '0.5rem', opacity: '30%' }
              }}
            ></Slider>
          </div>
        )
      })}

      <div className='border-y-2 my-[3rem]'>
        {toggles.map((element) => {
          return (
            <div key={element.id} className='flex justify-between my-[1rem]'>
              <div className='font-andika'>{element.label}</div>
              <Switch
                onChange={() => {
                  element.setState(!element.state)
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
      <div className='border-y-2 my-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Nội thất</div>
        {checks.map((element) => {
          return (
            <div key={element.id} className='flex justify-between my-[1rem]'>
              <div className='flex gap-[1rem]'>
                <input
                  type='checkbox'
                  className='transform scale-150 accent-black'
                  checked={element.state}
                  onChange={() => {
                    element.setState(!element.state)
                  }}
                />
                <div className='font-andika'>{element.label}</div>
              </div>
              <div className='opacity-50'>{element.count}</div>
            </div>
          )
        })}
      </div>
      <div className='border-y-2 my-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Số lượng người ở</div>
        {numOfPeople.map((element) => {
          return (
            <div key={element.id} className='flex justify-between my-[1rem]'>
              <div className='flex gap-[1rem]'>
                <input
                  type='radio'
                  className='transform scale-150 accent-black'
                  onChange={() => {
                    setCurrentNumOfPeople(element.value)
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
