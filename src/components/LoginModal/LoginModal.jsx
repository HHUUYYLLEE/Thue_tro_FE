import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
export default function LoginModal({ closeModalLogin }) {
  return (
    <div className='modal '>
      <div className='overlay' onClick={() => closeModalLogin()}></div>
      <div className='modal-content min-w-[360px] md:min-w-[400px] bg-white'>
        <div className='relative w-full max-w-md max-h-full'>
          {/* <div
            onClick={() => closeModalLogin()}
            className='absolute right-0 top-[-0.5rem] rounded-full transition-all duration-300  cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 flex justify-center items-center h-8 w-8  dark:text-yellow-400 font-extrabold'
          >
            <AiOutlineClose />
          </div> */}
          <div className='font-itim'>
            <div className='flex w-full justify-between items-center pb-10 px-10'></div>
            <form className='w-full px-10' noValidate>
              <div className=' relative mb-10'>
                <label className='block mb-2 text-xl text-black'>Tài khoản</label>

                <input
                  type='text'
                  id='phone'
                  name='phone'
                  className='bg-[#D9D9D9] border border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
                />
              </div>

              <div className=' relative mb-10'>
                <label className='block mb-2 text-xl text-black'>Mật khẩu</label>
                <div className='absolute right-0 flex items-center pr-5 justify-center bottom-12 top-[40%] cursor-pointer scale-150'></div>
                <input
                  id='password'
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='bg-[#D9D9D9] border border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
                />
              </div>

              <div className='w-full flex justify-center items-center pt-14'>
                <button className='bg-[#D324D7] hover:bg-blue-500  mx-5 text-white py-4 px-8 border rounded-full'>
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
