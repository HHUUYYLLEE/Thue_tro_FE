import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { LiaSwimmingPoolSolid } from 'react-icons/lia'
import { PiDesktopLight } from 'react-icons/pi'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'
import { displayNum } from '../../../utils/utils'
import { PiDeviceTabletSpeakerLight } from 'react-icons/pi'
import { FiHardDrive } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { FiEdit } from 'react-icons/fi'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import useQueryConfig from '../../../hooks/useQueryConfig'
import { useMutation } from '@tanstack/react-query'
import { MdOutlineRestaurant } from 'react-icons/md'
import { VscSparkle } from 'react-icons/vsc'
import { MdRoomService } from 'react-icons/md'
import { PiAlignLeft } from 'react-icons/pi'
import { carIcon, lockIcon } from './svgs'
export default function Room({ room }) {
  const queryConfig = useQueryConfig()
  const [modalEdit, toggleModalEdit] = useState(false)
  const [modalDelete, toggleModalDelete] = useState(false)
  const mutationEdit = useMutation({
    mutationFn: (data) => {
      // return checkARoom(data)
    }
  })
  const mutationDelete = useMutation({
    mutationFn: (data) => {
      // return checkARoom(data)
    }
  })
  const [parklingLotToggle, setParkingLotToggle] = useState(
    queryConfig?.is_have_parking_lot !== undefined ? queryConfig.is_have_parking_lot === 'true' : false
  )
  const [newToggle, setNewToggle] = useState(queryConfig?.is_new !== undefined ? queryConfig.is_new === 'true' : false)
  const [highSecurityToggle, setHighSecurityToggle] = useState(
    queryConfig?.is_high_security !== undefined ? queryConfig.is_high_security === 'true' : false
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
  const checks1 = [
    {
      id: 1,
      label: 'Máy giặt',
      state: haveWashingMachine,
      setState: setHaveWashingMachine,
      queryKey: 'is_have_washing_machine',
      icon: <LiaSwimmingPoolSolid className='w-[1/5rem] h-[1.5rem]' />
    },
    {
      id: 2,
      label: 'Nhà bếp riêng',
      state: haveKitchen,
      setState: setHaveKitchen,
      queryKey: 'is_have_kitchen',
      icon: <MdOutlineRestaurant className='w-[1/5rem] h-[1.5rem]' />
    },
    {
      id: 3,
      label: 'Bàn ăn',
      state: haveDiningTable,
      setState: setHaveDiningTable,
      queryKey: 'is_have_dinning_table',
      icon: <MdRoomService className='w-[1/5rem] h-[1.5rem]' />
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
  let numOfFeatures = () => {
    let count = 0
    if (room.is_have_parking_lot) count++
    if (room.is_new) count++
    if (room.is_high_security) count++
    if (room.is_have_bed) count++
    if (room.is_have_wardrobe) count++
    if (room.is_have_dinning_table) count++
    if (room.is_have_refrigerator) count++
    if (room.is_have_television) count++
    if (room.is_have_kitchen) count++
    if (room.is_have_washing_machine) count++
    return count
  }
  return (
    <>
      <div className='flex justify-between items-center my-[1rem] border-2 rounded-md'>
        <div className='flex'>
          <div className='max-w-[16vw] min-w-[16vw] w-[100%] overflow-hidden max-h-[22vh] min-h-[22vh]'>
            <Link to={`/room/${room._id}`}>
              <img
                onMouseLeave={(e) => {
                  let randomIndex = Math.floor(Math.random() * 5)
                  while (room.images[randomIndex].url === e.target.src) randomIndex = Math.floor(Math.random() * 5)
                  e.target.src = room.images[randomIndex].url
                }}
                src={room.images[0].url}
                className='w-[100%] cursor-pointer hover:scale-125 transition duration-300 ease-in-out h-full object-cover'
                alt=''
                // referrerPolicy='no-referrer'
              />
            </Link>
          </div>
          <div className='ml-[1rem] flex-col flex justify-center max-h-[12rem]'>
            <Link to={`/room/${room._id}`}>
              <div className='font-bold cursor-pointer font-lato text-2xl max-w-[16vw] line-clamp-1'>{room.name}</div>
            </Link>
            <div className='flex text-1xl text-[#01B7F2]'>
              <FaLocationDot />
              <div className='font-lato text-xs mt-1 ml-[0.4rem] max-w-[16vw] line-clamp-1'>{room.address}</div>
            </div>
            <div className='font-montserrat-700 text-sm mt-1'>{'Diện tích: ' + room.area + 'm2'}</div>
            <div className='flex mt-[1.2rem]'>
              <IoMdCafe />
              <div className='ml-[0.4rem] font-montserrat-700'>{numOfFeatures()}</div>
              <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
            </div>
            <div className='flex mt-[0.4rem] items-center'>
              {room.is_checked_information ? (
                <FaRegCheckSquare className='text-[#0057FF] text-xl' />
              ) : (
                <FaRegSquare className='text-[#0057FF] text-xl' />
              )}
              <div className='font-lato text-[#01B7F2] text-lg  ml-[0.5rem]'>Đã xác minh</div>
            </div>
          </div>
        </div>
        <div className='mt-[1.5rem] mr-[2vw]'>
          <div className='text-[#353535] font-poppins-700 text-4xl'>{displayNum(room.price) + 'VNĐ/tháng'}</div>
          <div className='flex justify-end font-poppins-500 text-[#112211]'>excl. tax</div>
          <div className='flex justify-end mt-[1vh]'>
            <div className='flex justify-between gap-7'>
              <button
                onClick={() => toggleModalEdit(true)}
                className='flex justify-center items-center gap-3 font-poppins-600 hover:bg-blue-500 bg-[#01B7F2] px-[0.5rem] py-[0.7rem] rounded-md text-white'
              >
                <div>Sửa</div>
                <FiEdit />
              </button>
              <button
                onClick={() => toggleModalDelete(true)}
                className='flex justify-center items-center gap-3 font-poppins-600 hover:bg-blue-500 bg-[#E23131] px-[0.5rem] py-[0.7rem] rounded-md text-white'
              >
                <div>Xoá</div>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
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
        isOpen={modalEdit}
        onRequestClose={() => toggleModalEdit(false)}
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
                    onClick={() => toggleModalEdit(false)}
                  >
                    x
                  </div>
                </div>
              </div>
              <div className='w-full pb-[2rem] border-b-8 border-gray-400'>
                <div className='flex ml-[1.8rem] mr-[0.5rem]'>
                  <div className='w-[34rem] mt-[2rem] text-[#434343]'>
                    <div className='text-3xl font-inter-700'>Thông tin bất động sản</div>
                    <div className='text-lg mt-[2rem]￼'>
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
                    <textarea
                      placeholder='VD: 3, 3-4, 1-2, 3-5, ...'
                      className='resize-none placeholder:text-[#C6C6C6C6] placeholder:font-inter-400 w-full h-[4rem] mt-[0.5rem] rounded-lg outline-none border-[#FF0000] border-2 py-[1rem] px-[2rem]'
                      name=''
                      id=''
                      defaultValue={room?.address}
                    ></textarea>
                  </div>

                  <div
                    className='cursor-pointer w-[2rem] flex justify-end font-inter-700 text-[#656565] text-3xl'
                    onClick={() => toggleModalEdit(false)}
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
                          onClick={() => toggleModalEdit(false)}
                          className='px-[1.1rem] py-[0.5rem] flex justify-center items-center bg-[#C62D2D] hover:bg-red-900 text-white font-inter-700 rounded-md text-sm'
                        >
                          Huỷ
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className='cursor-pointer w-[2rem] flex justify-end font-inter-700 text-[#656565] text-3xl'
                    onClick={() => toggleModalEdit(false)}
                  >
                    x
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </Modal>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            paddingLeft: '3vw',
            paddingRight: '3vw',
            paddingTop: '2vw',
            paddingBottom: '4vw',
            borderWidth: '0px',
            borderRadius: '1rem'
          }
        }}
        isOpen={modalDelete}
        onRequestClose={() => {
          if (!mutationDelete.isPending) toggleModalDelete(false)
        }}
      >
        {mutationDelete.isPending ? (
          <>
            <div className='text-[#4FA94D] font-dmsans-700 mb-[5vh] text-3xl'>Đang gửi yêu cầu xoá...</div>
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
            <div className='font-inter-700 text-4xl'>Xác nhận xoá phòng trọ?</div>
            <div className='mt-[8vh] flex justify-between'>
              <button
                // onClick={() => updateRoomCheck({ _id: room?._id, is_checked_information: true })}
                className='w-[10vw] h-[8vh] flex justify-center items-center bg-[#0366FF] hover:bg-green-700 text-white font-inter-700 rounded-lg text-xl'
              >
                Xác minh
              </button>
              <button
                onClick={() => toggleModalDelete(false)}
                className='w-[10vw] h-[8vh] flex justify-center items-center bg-[#DD1A1A] hover:bg-red-900 text-white font-inter-700 rounded-lg text-xl'
              >
                Huỷ
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
