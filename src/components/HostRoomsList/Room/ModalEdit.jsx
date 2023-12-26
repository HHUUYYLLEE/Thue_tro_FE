import { MdOutlineRestaurant } from 'react-icons/md'
import { VscSparkle } from 'react-icons/vsc'
import { MdRoomService } from 'react-icons/md'
import { PiAlignLeft } from 'react-icons/pi'
import { PiDeviceTabletSpeakerLight } from 'react-icons/pi'
import { FiHardDrive } from 'react-icons/fi'
import { LiaSwimmingPoolSolid } from 'react-icons/lia'
import { PiDesktopLight } from 'react-icons/pi'
import { useState } from 'react'
import Modal from 'react-modal'
import { useMutation } from '@tanstack/react-query'

import { TailSpin } from 'react-loader-spinner'
import { carIcon, lockIcon } from './svgs'

export default function ModalEdit({ room, toggle, checked }) {
  const mutationEdit = useMutation({
    mutationFn: (data) => {
      // return checkARoom(data)
    }
  })
  const keysInResponse = [
    'count_bed',
    'count_wardrobe',
    'count_dining_table',
    'count_refrigerator',
    'count_television',
    'count_kitchen',
    'count_washing_machine',
    'one_people',
    'two_people',
    'three_people',
    'four_people',
    'five_people',
    'six_people'
  ]
  const [parklingLotToggle, setParkingLotToggle] = useState(room.is_have_parking_lot)
  const [newToggle, setNewToggle] = useState(room.is_new)
  const [highSecurityToggle, setHighSecurityToggle] = useState(room.is_high_security)

  const [haveBed, setHaveBed] = useState(room.is_have_bed)
  const [haveWardrobe, setHaveWardrobe] = useState(room.is_have_wardrobe)
  const [haveDiningTable, setHaveDiningTable] = useState(room.is_have_dinning_table)
  const [haveRefrigerator, setHaveRefrigerator] = useState(room.is_have_refrigerator)
  const [haveTV, setHaveTV] = useState(room.is_have_television)
  const [haveKitchen, setHaveKitchen] = useState(room.is_have_kitchen)
  const [haveWashingMachine, setHaveWashingMachine] = useState(room.is_have_washing_machine)
  const checks1 = [
    {
      id: 1,
      label: 'Máy giặt',
      state: haveWashingMachine,
      setState: setHaveWashingMachine,
      queryKey: 'is_have_washing_machine',
      icon: <LiaSwimmingPoolSolid className='w-[22px] h-[22px]' />
    },
    {
      id: 2,
      label: 'Nhà bếp riêng',
      state: haveKitchen,
      setState: setHaveKitchen,
      queryKey: 'is_have_kitchen',
      icon: <MdOutlineRestaurant className='w-[22px] h-[22px]' />
    },
    {
      id: 3,
      label: 'Bàn ăn',
      state: haveDiningTable,
      setState: setHaveDiningTable,
      queryKey: 'is_have_dinning_table',
      icon: <MdRoomService className='w-[22px] h-[22px]' />
    },
    {
      id: 4,
      label: 'Có chỗ để xe',
      state: parklingLotToggle,
      setState: setParkingLotToggle,
      queryKey: 'is_have_parking_lot',
      icon: carIcon
    },
    {
      id: 5,
      label: 'Tivi',
      state: haveTV,
      setState: setHaveTV,
      queryKey: 'is_have_television',
      icon: <PiDesktopLight className='w-[1.5rem] h-[1.5rem]' />
    }
  ]
  const checks2 = [
    {
      id: 6,
      label: 'Giường ngủ',
      state: haveBed,
      setState: setHaveBed,
      queryKey: 'is_have_bed',
      icon: <FiHardDrive className='w-[1.5rem] h-[1.5rem] scale-x-[-1]' />
    },
    {
      id: 7,
      label: 'Bảo mật cao',
      state: highSecurityToggle,
      setState: setHighSecurityToggle,
      queryKey: 'is_high_security',
      icon: lockIcon
    },
    {
      id: 8,
      label: 'Tủ quần áo',
      state: haveWardrobe,
      setState: setHaveWardrobe,
      queryKey: 'is_have_wardrobe',
      icon: <PiAlignLeft className='w-[1.5rem] h-[1.5rem]' />
    },
    {
      id: 9,
      label: 'Phòng mới',
      state: newToggle,
      setState: setNewToggle,
      queryKey: 'is_new',
      icon: <VscSparkle className='w-[1.5rem] h-[1.5rem] scale-x-[-1] scale-y-[-1]' />
    },

    // ,
    // {
    //   id: 4,
    //   label: 'Chung chủ',
    //   state: haveOwner,
    //   setState: setHaveOwner,
    //   queryKey: 'is_have_owner'
    // }
    {
      id: 10,
      label: 'Tủ lạnh',
      state: haveRefrigerator,
      setState: setHaveRefrigerator,
      queryKey: 'is_have_refrigerator',
      icon: <PiDeviceTabletSpeakerLight className='w-[1.5rem] h-[1.5rem]' />
    }
  ]

  return (
    <>
      <Modal
        style={{
          overlay: {
            position: 'absolute',
            height: document.body.scrollHeight,
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          },
          content: {
            position: 'absolute',
            top: '58%',
            left: '57%',
            right: 'auto',
            height: 'min-content',
            // bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            paddingTop: '0px',
            paddingBottom: '2rem',
            paddingRight: '0px',
            paddingLeft: '0px',
            borderWidth: '0px',
            borderRadius: '0.5rem'
          }
        }}
        isOpen={checked}
        onRequestClose={() => {
          if (!mutationEdit.isPending) toggle(false)
        }}
      >
        {mutationEdit.isPending ? (
          <>
            <div className='text-[#4FA94D] font-dmsans-700 mb-[5vh] text-3xl'>Đang gửi yêu cầu chỉnh sửa...</div>
            <TailSpin
              height='200'
              width='200'
              color='#4fa94d'
              ariaLabel='tail-spin-loading'
              radius='5'
              visible={true}
              wrapperStyle={{ display: 'flex', 'justify-content': 'center' }}
            />
          </>
        ) : (
          <>
            <form>
              <div className='w-full pb-[2rem] border-b-8 border-gray-400'>
                <div className='flex ml-[1.8rem] mr-[0.5rem]'>
                  <div className='w-[34rem] mt-[2rem] text-[#434343]'>
                    <div className='text-3xl font-inter-700'>Thông tin bài viết</div>
                    <div className='text-lg mt-[2rem]'>
                      <span className='font-inter-700'>Tên phòng </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='rounded-lg h-[4rem] border-[#FF0000] border-2 py-[1rem] mt-[0.5rem]'>
                      <textarea
                        placeholder='VD: Phòng trọ 71b giếng mứt'
                        className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 w-full h-full outline-none px-[2rem]'
                        name=''
                        id=''
                        defaultValue={room?.name}
                      ></textarea>
                    </div>
                    <div className='text-lg mt-[1.1rem]'>
                      <span className='font-inter-700'>Mô tả </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='rounded-lg h-[15rem] border-[#FF0000] border-2 py-[1rem] mt-[0.5rem]'>
                      <textarea
                        placeholder='VD: Phòng trọ 71b giếng mứt ở đường Bạch Mai, gần các khu trung tâm thương mại, các trường đại học, ....'
                        className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 w-full h-full outline-none  px-[2rem]'
                        name=''
                        id=''
                        defaultValue={room?.describe}
                      ></textarea>
                    </div>
                    <div className='text-lg mt-[1.1rem]'>
                      <span className='font-inter-700'>Số lượng người </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='rounded-lg h-[4rem] border-[#FF0000] border-2 py-[0.5rem] mt-[0.5rem]'>
                      <textarea
                        placeholder='VD: 3, 3-4, 1-2, 3-5, ...'
                        className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 outline-none w-full px-[2rem]'
                        name=''
                        id=''
                        defaultValue={room?.number_or_people}
                      ></textarea>
                    </div>
                  </div>

                  <div
                    className='cursor-pointer w-[2rem] flex justify-end font-inter-700 text-[#656565] text-3xl'
                    onClick={() => toggle(false)}
                  >
                    x
                  </div>
                </div>
              </div>
              <div className='w-full pb-[2rem] border-b-8 border-gray-400'>
                <div className='flex ml-[1.8rem] mr-[0.5rem]'>
                  <div className='w-[34rem] mt-[2rem] text-[#434343]'>
                    <div className='text-3xl font-inter-700'>Thông tin bất động sản</div>
                    <div className='text-lg mt-[2rem]'>
                      <span className='font-inter-700'>Diện tích </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='relative rounded-lg h-[3rem] border-[#FF0000] border-2 py-[0.5rem] mt-[0.5rem]'>
                      <textarea
                        placeholder='VD: 50'
                        className='resize-none placeholder:text-[#C6C6C6C6] h-full placeholder:font-inter-400 outline-none w-full pl-[2rem] pr-[3.5rem]'
                        name=''
                        id=''
                        defaultValue={room?.area}
                      ></textarea>
                      <div className='absolute top-[50%] right-[5%] translate-y-[-50%]'>m2</div>
                    </div>
                    <div className='text-lg mt-[1.1rem]'>
                      <span className='font-inter-700'>Mức giá </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='flex justify-between h-[2.5rem] gap-6 mt-[0.5rem]'>
                      <textarea
                        placeholder='VD: 1200000000 ....'
                        className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 w-[50rem] rounded-lg outline-none border-[#FF0000] border-2 py-[0.3rem] px-[2rem]'
                        name=''
                        id=''
                        defaultValue={room?.price}
                      ></textarea>

                      <div className='w-full rounded-lg border-2 border-[#BCBCBC] relative'>
                        <div className='text-inter-400 ml-[0.5rem] absolute top-[50%] translate-y-[-50%]'>VNĐ</div>
                      </div>
                    </div>

                    <div className='text-lg mt-[1.1rem]'>
                      <span className='font-inter-700'>Khu vực </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='flex justify-between h-[4rem] mt-[0.5rem] border-[#FF0000] border-2 rounded-lg py-[1rem]'>
                      <textarea
                        placeholder='VD: 3, 3-4, 1-2, 3-5, ...'
                        className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 w-full h-full outline-none px-[2rem]'
                        name=''
                        id=''
                        defaultValue={room?.address}
                      ></textarea>
                    </div>
                  </div>

                  <div
                    className='cursor-pointer w-[2rem] flex justify-end font-inter-700 text-[#656565] text-3xl'
                    onClick={() => toggle(false)}
                  >
                    x
                  </div>
                </div>
              </div>
              <div className='w-full pb-[2rem]'>
                <div className='flex ml-[1.8rem] mr-[0.5rem]'>
                  <div className='w-[34rem] mt-[2rem] text-[#434343]'>
                    <div className='text-3xl'>
                      <span className='font-inter-700'>Tiện ích </span>
                      <span className='text-[#D83B3B]'>*</span>
                    </div>
                    <div className='grid grid-cols-2 w-full gap-x-6'>
                      <div className='col-start-1 col-span-1 row-span-1 w-[12rem]'>
                        {checks1.map((element) => {
                          return (
                            <div key={element.id} className='mt-[1.2rem] flex justify-between'>
                              <div className='flex'>
                                {element.icon}
                                <div className='font-poppins-500 text-[#4F4F4F] ml-[1rem]'>{element.label}</div>
                              </div>
                              <input
                                type='checkbox'
                                name='checkbox'
                                className='transform scale-150 accent-black'
                                defaultChecked={room?.[element.queryKey]}
                                onChange={(e) => {
                                  // console.log(e.target.checked)
                                  element.setState(e.target.checked)
                                  // setValueQuery((prev) => ({ ...prev, [element.queryKey]: e.target.checked }))
                                  // console.log(valueQuery)
                                }}
                              />
                            </div>
                          )
                        })}
                      </div>
                      <div className='col-start-2 col-span-1 row-span-1 w-[14rem]'>
                        {checks2.map((element) => {
                          return (
                            <div key={element.id} className='mt-[1.2rem] flex justify-between'>
                              <div className='flex'>
                                {element.icon}
                                <div className='font-poppins-500 text-[#4F4F4F] ml-[1rem]'>{element.label}</div>
                              </div>
                              <input
                                type='checkbox'
                                name='checkbox'
                                className='transform scale-150 accent-black'
                                defaultChecked={room?.[element.queryKey]}
                                onChange={(e) => {
                                  // console.log(e.target.checked)
                                  element.setState(e.target.checked)
                                  // setValueQuery((prev) => ({ ...prev, [element.queryKey]: e.target.checked }))
                                  // console.log(valueQuery)
                                }}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className='mt-[2rem] flex justify-end w-full'>
                      <div className='flex justify-between gap-4'>
                        <button
                          // onClick={}
                          className='px-[1.1rem] py-[0.5rem] flex justify-center items-center bg-[#236CFC] hover:bg-green-700 text-white font-inter-700 rounded-md text-sm'
                        >
                          Lưu
                        </button>
                        <button
                          onClick={() => toggle(false)}
                          className='px-[1.1rem] py-[0.5rem] flex justify-center items-center bg-[#C62D2D] hover:bg-red-900 text-white font-inter-700 rounded-md text-sm'
                        >
                          Huỷ
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className='cursor-pointer w-[2rem] flex justify-end font-inter-700 text-[#656565] text-3xl'
                    onClick={() => toggle(false)}
                  >
                    x
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </Modal>
    </>
  )
}
