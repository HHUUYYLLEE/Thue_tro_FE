import { FaLocationDot } from 'react-icons/fa6'
import { useState } from 'react'
import map from '../../asset/img/map.png'
import RoomDetailImage1 from '../../asset/img/RoomDetailImage1.png'
import RoomDetailImage2 from '../../asset/img/RoomDetailImage2.png'
import RoomDetailImage3 from '../../asset/img/RoomDetailImage3.png'
import RoomDetailImage4 from '../../asset/img/RoomDetailImage4.png'
import RoomDetailImage5 from '../../asset/img/RoomDetailImage5.png'
import { useParams } from 'react-router-dom'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getRoom } from '../../api/rooms.api'

export default function RoomDetail() {
  // const video = 'https://youtu.be/r_gURcXAG10?si=di7Yhh16KT_MirpH'

  const { id } = useParams()

  const [haveBed, setHaveBed] = useState(false)
  const { data } = useQuery({
    queryKey: ['roomDetail', id],
    queryFn: () => {
      return getRoom(id)
    },
    placeholderData: keepPreviousData
  })

  const room = data?.data?.room
  console.log(room)

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {room && (
        <>
          <div className='w-5/6 flex flex-col justify-between'>
            <div className='flex flex-row justify-between font-bold text-2xl'>
              <div>Trọ sinh viên Hoàng Mai | Phòng 2-3 người | Từ 5 - 7 triệu | 221B Baker Street</div>
              <div>6.999.999 VNĐ</div>
            </div>
            <div className='flex flex-row justify-between mt-4'>
              <div className=''>
                <div className='flex'>
                  <div className='self-center mr-1'>
                    <FaLocationDot />
                  </div>
                  <div className='underline'>Hoàng Mai, Baker, Baker Street, 221B</div>
                </div>
                <div className='text-sm mt-3'>Diện tích: 30m2</div>
              </div>
              <div className='flex flex-row items-center justify-center'>
                <div className='flex items-center bg-[#CECECE] min-w-[8rem] text-black cursor-pointer border border-[#01B7F2] rounded-sm px-4 py-1.5 mr-3'>
                  <div className='flex text-lg font-bold justify-center items-center w-full'>Đã xác minh</div>
                </div>
                <div className='flex items-center bg-[#01B7F2] min-w-[8rem] text-white cursor-pointer hover:bg-sky-600 font-semibold rounded-sm px-4 py-1.5'>
                  <div className='flex text-lg font-bold justify-center items-center w-full'>Liên Hệ</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-5/6 mb-4'>
            <div className='mt-14 mb-3'>
              <iframe
                width='100%'
                height='600'
                src={room.video_url}
                title='YouTube video player'
                // frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
            <div className='grid grid-cols-5 gap-4'>
              <div className='grid col-span-3 row-span-2 gap-4'>
                <div className='overflow-hidden'>
                  <img className='rounded-lg object-cover w-full h-auto' src={room.images[0].url} alt='' />
                </div>
              </div>
              <div className='grid gap-4'>
                <div className='overflow-hidden'>
                  <img className='rounded-lg object-cover w-full h-auto' src={room.images[1].url} alt='' />
                </div>
                <div className='overflow-hidden'>
                  <img className='rounded-lg object-cover w-full h-auto' src={room.images[2].url} alt='' />
                </div>
              </div>
              <div className='grid gap-4'>
                <div className='overflow-hidden'>
                  <img className='rounded-lg object-cover w-full h-auto' src={room.images[3].url} alt='' />
                </div>
                <div className='overflow-hidden'>
                  <img className='rounded-lg object-cover w-full h-auto' src={room.images[4].url} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='my-16 w-5/6'>
            <div className='mb-5'>
              <p className='mb-2 font-medium ml-2'>Giới thiệu</p>
              <div className='w-full bg-[#CECECE] h-[1px] '>
                <div className='h-[3px] w-[87px] bg-[#01B7F2]'></div>
              </div>
            </div>
            <div>
              <ul className='list-disc list-inside [&>*]:ml-4'>
                CHO THUÊ CĂN HỘ STUDIO ĐẦY ĐỦ ĐỒ ĐIỀU HÒA GIƯỜNG TỦ PHỐ HÀM LONG CÁCH HỒ GƯƠM 350M
                <li>Tòa nhà 8 tầng tại số 25 Ngõ Hàm Long 2</li>
                <li>
                  Tòa nhà cách mặt phố Hàm Long 30m đường vào rộng, rất thuận tiện cho việc đi lại, sinh hoạt, vui chơi,
                  giải trí, Ngay trung tâm phố cổ, chỉ 350m là ra tới Hồ Gươm.
                </li>
                <li>
                  Căn hộ rộng được lát sàn gỗ, căn nào cũng có cửa sổ rộng, thoáng mát. Các phòng được thiết kế hết sức
                  hợp lý: kiểu căn hộ Studio, được lắp đầy đủ nội thất.
                </li>
                <li>Nội quy:</li>
                <ul className='list-disc list-inside [&>*]:ml-4'>
                  <li>
                    Sáng mở cửa lúc 5h30, tối đóng cửa lúc 23h30. Ai vi phạm ngoài giờ sẽ không được vào hoặc ra khỏi
                    trọ.
                  </li>
                  <li>Không gây tiếng ồn ảnh hưởng các phòng xung quanh, không tiệc tùng, không hút chất cấm,...</li>
                </ul>
                <li>
                  Tòa nhà trang bị thang máy cao cấp, máy giặt, truyền hình cáp, mỗi căn hộ được cấp thẻ từ thang máy
                  riêng.
                </li>
                <li>
                  Tòa nhà có bảo vệ 24/24 nên an ninh cực ổn,khóa cửa vân tay ra vào thoải mái, nhà để xe rộng rãi.
                  -Riêng sàn văn phòng tầng 1 diện tích rộng 40m2 giá 6 000.000 đ/ tháng.
                </li>
                <li>Liên hệ chủ nhà Chị Hương</li>
              </ul>
            </div>
          </div>
          <div className='w-5/6 flex flex-col md:flex-row justify-between'>
            <div className=''>
              <div className='flex'>
                <div className='self-center mr-3'>
                  <svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10.9997 17.4168C11.9721 17.4168 12.9048 17.0305 13.5924 16.3429C14.28 15.6553 14.6663 14.7226 14.6663 13.7502C14.6663 12.7777 14.28 11.8451 13.5924 11.1574C12.9048 10.4698 11.9721 10.0835 10.9997 10.0835C10.0272 10.0835 9.09458 10.4698 8.40695 11.1574C7.71932 11.8451 7.33301 12.7777 7.33301 13.7502C7.33301 14.7226 7.71932 15.6553 8.40695 16.3429C9.09458 17.0305 10.0272 17.4168 10.9997 17.4168V17.4168Z'
                      stroke='#181818'
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.57031 13.7504L10.1661 14.3462C10.3403 14.5204 10.6245 14.5295 10.7986 14.3554L12.4303 12.8521'
                      stroke='#181818'
                      strokeWidth={1.5}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.25009 20.1668H13.7501C17.4351 20.1668 18.0951 18.691 18.2876 16.8943L18.9751 11.3943C19.2226 9.15766 18.5809 7.3335 14.6668 7.3335H7.33342C3.41925 7.3335 2.77759 9.15766 3.02509 11.3943L3.71259 16.8943C3.90509 18.691 4.56509 20.1668 8.25009 20.1668Z'
                      stroke='#181818'
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.875 7.03108V6.14191C6.875 4.07941 8.53417 2.05357 10.5967 1.86107C11.1697 1.80477 11.7483 1.86908 12.295 2.04985C12.8417 2.23063 13.3445 2.52387 13.7711 2.9107C14.1976 3.29753 14.5385 3.76939 14.7717 4.2959C15.0048 4.82241 15.1252 5.39191 15.125 5.96774V7.23274'
                      stroke='#181818'
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className=' font-normal text-lg'>SĐT: 09849298499191</div>
              </div>
              <div className='font-semibold my-3'>Tiện ích</div>
              <div className='grid grid-cols-2 gap-y-0 gap-x-16'>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M0 13C1.67 12.25 3.33 11.5 5 11.17V3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.316071 7.20435 0 8 0C9.31 0 10.42 0.83 10.83 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H12V3C12 2.20435 12.3161 1.44129 12.8787 0.87868C13.4413 0.316071 14.2044 0 15 0C16.31 0 17.42 0.83 17.83 2H15C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V12.94C16 12.62 18 11 20 11V13C17.78 13 15.56 15 13.33 15C11.11 15 8.89 13 6.67 13C4.44 13 2.22 14 0 15V13ZM12 6H7V8H12V6ZM12 10H7V11C8.67 11.16 10.33 12.31 12 12.79V10ZM0 17C2.22 16 4.44 15 6.67 15C8.89 15 11.11 17 13.33 17C15.56 17 17.78 15 20 15V17C17.78 17 15.56 19 13.33 19C11.11 19 8.89 17 6.67 17C4.44 17 2.22 18 0 19V17Z'
                          fill='#181818'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Chỗ giặt dũ</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M1.83398 13.75H16.959C18.7282 13.75 20.1673 15.1892 20.1673 16.9583C20.1673 18.7275 18.7282 20.1667 16.959 20.1667C15.1898 20.1667 13.7507 18.7275 13.7507 16.9583V16.5'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M1.83398 11.0002H16.959C18.719 11.0002 20.1673 9.561 20.1673 7.79183C20.1673 6.03183 18.719 4.5835 16.959 4.5835C16.1088 4.58591 15.2942 4.92471 14.693 5.52587C14.0919 6.12702 13.7531 6.94167 13.7507 7.79183V8.25016'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M1.83398 8.25003H8.53482C9.02251 8.25003 9.49926 8.10541 9.90476 7.83446C10.3103 7.56351 10.6263 7.1784 10.8129 6.72783C10.9996 6.27726 11.0484 5.78146 10.9533 5.30313C10.8581 4.82481 10.6233 4.38544 10.2784 4.04059C9.93357 3.69573 9.4942 3.46089 9.01588 3.36574C8.53755 3.2706 8.04176 3.31943 7.59118 3.50606C7.14061 3.69269 6.7555 4.00875 6.48455 4.41425C6.2136 4.81975 6.06898 5.2965 6.06898 5.78419V6.13253'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Điều hòa</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20' fill='none'>
                        <path
                          d='M13 4V10C13 11.1 13.9 12 15 12H16V19C16 19.55 16.45 20 17 20C17.55 20 18 19.55 18 19V1.13C18 0.48 17.39 8.9407e-08 16.76 0.15C14.6 0.68 13 2.51 13 4ZM8 7H6V1C6 0.45 5.55 0 5 0C4.45 0 4 0.45 4 1V7H2V1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1V7C0 9.21 1.79 11 4 11V19C4 19.55 4.45 20 5 20C5.55 20 6 19.55 6 19V11C8.21 11 10 9.21 10 7V1C10 0.45 9.55 0 9 0C8.45 0 8 0.45 8 1V7Z'
                          fill='#181818'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Nhà bếp riêng</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 15 15'>
                        <path
                          fill='currentColor'
                          d='M14.5 7v1h-1v2h-1v1H11V8H4v3H2.5v-1h-1V8h-1V7h1V5h1V4H4v3h7V4h1.5v1h1v2Z'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Có dụng cụ tập gym</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='15' viewBox='0 0 20 15' fill='none'>
                        <path
                          d='M1 15C0.716667 15 0.479333 14.904 0.288 14.712C0.0960001 14.5207 0 14.2833 0 14C0 13.7167 0.0960001 13.4793 0.288 13.288C0.479333 13.096 0.716667 13 1 13H19C19.2833 13 19.5207 13.096 19.712 13.288C19.904 13.4793 20 13.7167 20 14C20 14.2833 19.904 14.5207 19.712 14.712C19.5207 14.904 19.2833 15 19 15H1ZM1 12V11C1 8.86667 1.65433 6.98333 2.963 5.35C4.271 3.71667 5.95 2.68333 8 2.25V2C8 1.45 8.196 0.979333 8.588 0.588C8.97933 0.196 9.45 0 10 0C10.55 0 11.021 0.196 11.413 0.588C11.8043 0.979333 12 1.45 12 2V2.25C14.0667 2.68333 15.75 3.71667 17.05 5.35C18.35 6.98333 19 8.86667 19 11V12H1Z'
                          fill='#181818'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Phòng ăn riêng</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'>
                        <path
                          fill='currentColor'
                          d='M346.65 304.3a136 136 0 0 0-180.71 0a21 21 0 1 0 27.91 31.38a94 94 0 0 1 124.89 0a21 21 0 0 0 27.91-31.4Z'
                        />
                        <path
                          fill='currentColor'
                          d='M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92a21 21 0 1 0 28.68 30.67a180.28 180.28 0 0 1 246.24 0a21 21 0 1 0 28.68-30.67a221.47 221.47 0 0 0-151.8-59.92Z'
                        />
                        <path
                          fill='currentColor'
                          d='M462 175.86a309 309 0 0 0-411.44 0a21 21 0 1 0 28 31.29a267 267 0 0 1 355.43 0a21 21 0 0 0 28-31.31Z'
                        />
                        <circle cx='256.28' cy='393.41' r='32' fill='currentColor' />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Free Wi-Fi</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M14.2168 2.59424H7.78185C5.49935 2.59424 4.99518 3.73091 4.70185 5.12424L3.66602 10.0834H18.3327L17.2969 5.12424C17.0035 3.73091 16.4993 2.59424 14.2168 2.59424V2.59424Z'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M20.157 18.1685C20.2578 19.241 19.3962 20.1668 18.2962 20.1668H16.5728C15.5828 20.1668 15.4453 19.7452 15.2712 19.2227L15.0878 18.6727C14.8312 17.921 14.6662 17.4168 13.3462 17.4168H8.65285C7.33285 17.4168 7.14035 17.9852 6.91118 18.6727L6.72785 19.2227C6.55368 19.7452 6.41618 20.1668 5.42618 20.1668H3.70285C2.60285 20.1668 1.74118 19.241 1.84201 18.1685L2.35535 12.586C2.48368 11.211 2.74951 10.0835 5.15118 10.0835H16.8478C19.2495 10.0835 19.5153 11.211 19.6437 12.586L20.157 18.1685Z'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M3.66667 7.3335H2.75'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M19.2497 7.3335H18.333'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M11 2.75V4.58333'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.625 4.5835H12.375'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M5.5 13.75H8.25'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M13.75 13.75H16.5'
                          stroke='#181818'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Có chỗ để xe</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
                <div className='flex justify-between my-[14px] min-w-[180px]'>
                  <div className='flex gap-[0.5rem]'>
                    <div className='self-center'>
                      <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M14.7692 21C15.8929 16.3512 17.2565 14.9013 21 13.6364C17.0664 12.3084 15.8396 10.6969 14.7692 6.27273C13.6455 10.9216 12.282 12.3714 8.53846 13.6364C12.4674 14.9628 13.7012 16.5852 14.7692 21ZM6.46154 11.1818C6.9739 8.76207 7.96386 7.66977 9.92308 7.09091C7.96386 6.51205 6.9739 5.41975 6.46154 3C5.97132 5.31517 5.04749 6.48539 3 7.09091C4.95899 7.67026 5.94917 8.76206 6.46154 11.1818Z'
                          stroke='black'
                          strokeWidth={1.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='font-andika text-sm'>Phòng mới</div>
                  </div>

                  <input
                    type='checkbox'
                    className='transform scale-150 accent-black'
                    checked={haveBed}
                    onChange={() => setHaveBed(!haveBed)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className='mb-5 flex'>
                <div className='text-sm self-center'>Map</div>
                <div className='self-center mx-2'>
                  <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12.0001 21.5999C12.0001 21.5999 19.5131 14.9216 19.5131 9.91294C19.5131 5.76361 16.1494 2.3999 12.0001 2.3999C7.85076 2.3999 4.48706 5.76361 4.48706 9.91294C4.48706 14.9216 12.0001 21.5999 12.0001 21.5999Z'
                      fill='#FF0000'
                    />
                    <path
                      d='M14.4004 9.60005C14.4004 10.9255 13.3259 12.0001 12.0004 12.0001C10.6749 12.0001 9.60041 10.9255 9.60041 9.60005C9.60041 8.27457 10.6749 7.20005 12.0004 7.20005C13.3259 7.20005 14.4004 8.27457 14.4004 9.60005Z'
                      fill='#FF0000'
                    />
                    <path
                      d='M12.0001 21.5999C12.0001 21.5999 19.5131 14.9216 19.5131 9.91294C19.5131 5.76361 16.1494 2.3999 12.0001 2.3999C7.85076 2.3999 4.48706 5.76361 4.48706 9.91294C4.48706 14.9216 12.0001 21.5999 12.0001 21.5999Z'
                      stroke='#272727'
                    />
                    <path
                      d='M14.4004 9.60005C14.4004 10.9255 13.3259 12.0001 12.0004 12.0001C10.6749 12.0001 9.60041 10.9255 9.60041 9.60005C9.60041 8.27457 10.6749 7.20005 12.0004 7.20005C13.3259 7.20005 14.4004 8.27457 14.4004 9.60005Z'
                      stroke='#272727'
                    />
                  </svg>
                </div>
                <div className='underline'>Hoàng Mai, Baker, Baker Street, 221B</div>
              </div>
              <div>
                <img style={{ maxWidth: '650px' }} src={map} alt='' className='pointer-events-none' />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
