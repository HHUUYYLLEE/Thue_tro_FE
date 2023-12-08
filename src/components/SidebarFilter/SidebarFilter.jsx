import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Switch from 'react-switch'
import { displayNum } from '../../utils/utils'
export default function SidebarFilter() {
  const [sliderPrice, setSliderPrice] = useState(1000000)
  const [sliderArea, setSliderArea] = useState(100)
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
  const [have1People, setHave1People] = useState(false)
  const [have2People, setHave2People] = useState(false)
  const [have3People, setHave3People] = useState(false)
  const [have4People, setHave4People] = useState(false)
  const [have5People, setHave5People] = useState(false)
  const [haveMoreThan5People, setHaveMoreThan5People] = useState(false)
  return (
    <>
      <div className='border-y-2 mt-[0.5rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Giá</div>
        <div className='text-[1.2rem] grid grid-cols-7'>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='opacity-50 ml-1'>0</div>
          </div>
          <div className='row-start-1 col-span-1 m-auto'>-</div>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderPrice)}</div>
          </div>
        </div>
        <Slider
          className='mt-[1rem] mb-[1.5rem]'
          value={sliderPrice}
          step={10000}
          min={1000000}
          max={10000000}
          onChange={(value) => setSliderPrice(value)}
          styles={{
            track: { backgroundColor: 'black', height: '0.7rem' },
            handle: { backgroundColor: 'black', height: '1.5rem', width: '1.5rem', borderColor: 'black' },
            rail: { backgroundColor: 'grey', height: '0.7rem', opacity: '30%' }
          }}
        ></Slider>
      </div>
      <div className='border-y-2 my-[3rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Diện tích</div>
        <div className='text-[1.2rem] grid grid-cols-7'>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='opacity-50 ml-1'>0m2</div>
          </div>
          <div className='row-start-1 col-span-1 m-auto'>-</div>
          <div className='row-start-1 col-span-3 border-2'>
            <div className='ml-1'>{displayNum(sliderArea) + 'm2'}</div>
          </div>
        </div>
        <Slider
          className='mt-[1rem] mb-[1.5rem]'
          value={sliderArea}
          step={10}
          min={10}
          max={500}
          onChange={(value) => setSliderArea(value)}
          styles={{
            track: { backgroundColor: 'black', height: '0.7rem' },
            handle: { backgroundColor: 'black', height: '1.5rem', width: '1.5rem', borderColor: 'black' },
            rail: { backgroundColor: 'grey', height: '0.7rem', opacity: '30%' }
          }}
        ></Slider>
      </div>
      <div className='border-y-2 my-[3rem]'>
        <div className='flex justify-between my-[1rem]'>
          <div className='font-andika'>Khu vực để xe</div>
          <Switch
            onChange={() => setParkingLotToggle(!parklingLotToggle)}
            checked={parklingLotToggle}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor='#000000'
          />
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='font-andika'>Mới</div>
          <Switch
            onChange={() => setNewToggle(!newToggle)}
            checked={newToggle}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor='#000000'
          />
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='font-andika'>An ninh cao</div>
          <Switch
            onChange={() => setHighSecurityToggle(!highSecurityToggle)}
            checked={highSecurityToggle}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor='#000000'
          />
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='font-andika'>Chung chủ</div>
          <Switch
            onChange={() => setHaveOwner(!haveOwner)}
            checked={haveOwner}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor='#000000'
          />
        </div>
      </div>
      <div className='border-y-2 my-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Nội thất</div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveBed}
              onChange={() => setHaveBed(!haveBed)}
            />
            <div className='font-andika'>Giường</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveWardrobe}
              onChange={() => setHaveWardrobe(!haveWardrobe)}
            />
            <div className='font-andika'>Tủ Quần áo</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveDiningTable}
              onChange={() => setHaveDiningTable(!haveDiningTable)}
            />
            <div className='font-andika'>Bàn ăn</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveRefrigerator}
              onChange={() => setHaveRefrigerator(!haveRefrigerator)}
            />
            <div className='font-andika'>Tủ lạnh</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveTV}
              onChange={() => setHaveTV(!haveTV)}
            />
            <div className='font-andika'>Tivi</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveKitchen}
              onChange={() => setHaveKitchen(!haveKitchen)}
            />
            <div className='font-andika'>Bếp núc</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveWashingMachine}
              onChange={() => setHaveWashingMachine(!haveWashingMachine)}
            />
            <div className='font-andika'>Máy giặt</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
      </div>
      <div className='border-y-2 my-[2rem]'>
        <div className='my-[0.5rem] text-2xl font-andika'>Số lượng người ở</div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={have1People}
              onChange={() => setHave1People(!have1People)}
            />
            <div className='font-andika'>1 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={have2People}
              onChange={() => setHave2People(!have2People)}
            />
            <div className='font-andika'>2 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={have3People}
              onChange={() => setHave3People(!have3People)}
            />
            <div className='font-andika'>3 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={have4People}
              onChange={() => setHave4People(!have4People)}
            />
            <div className='font-andika'>4 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={have5People}
              onChange={() => setHave5People(!have5People)}
            />
            <div className='font-andika'>5 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
        <div className='flex justify-between my-[1rem]'>
          <div className='flex gap-[1rem]'>
            <input
              type='checkbox'
              className='transform scale-150 accent-black'
              checked={haveMoreThan5People}
              onChange={() => setHaveMoreThan5People(!haveMoreThan5People)}
            />
            <div className='font-andika'>&#62;5 người</div>
          </div>
          <div className='opacity-50'>22222</div>
        </div>
      </div>
    </>
  )
}
