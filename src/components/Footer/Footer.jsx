import instagram from '../../asset/img/instagram.png'
import facebook from '../../asset/img/facebook.png'
import twitter from '../../asset/img/twitter.png'
import linked from '../../asset/img/linked.png'
import youtube from '../../asset/img/youtube.png'
import footer from '../../asset/img/footer.png'

export default function Footer() {
  return (
    <div>
      <div className='w-full h-[500px] flex flex-col items-center z-0 bg-[#2D3E52] relative'>
        <img className='w-full' src={footer} />
        <div className='div.row flex w-10/12 justify-center text-white'>
          <div className='div.col-lg-3 w-1/4'>
            <div className='div.footer-box'>
              <h4 className='heading4 font-semibold text-2xl '>
                Về chúng tôi
                <hr className='w-1/3 border-2 border-white mt-3'></hr>
              </h4>

              <div className='p.text-custom-white w-3/4 mt-3'>
                Được phát triển bởi team phát triển thuộc DHBKHN.
                <br />
                Tên nhóm: Dazai
              </div>
              <br />

              <div className='p.text-custom-white w-3/4 '>Website tìm phòng trọ tốt nhất Việt Nam</div>

              <div className='list w-3/4 mt-3 flex'>
                <img className='h-7 w-7 mr-3' src={facebook} />
                <img className='h-7 w-7 mr-3' src={twitter} />
                <img className='h-7 w-7 mr-3' src={linked} />
                <img className='h-7 w-7 mr-3' src={youtube} />
              </div>
            </div>
          </div>

          <div className='div.col-lg-3 w-1/4'>
            <div className='div.footer-box'>
              <h4 className='heading4 font-semibold text-2xl'>
                Từ khóa
                <hr className='w-1/3 border-2 border-white mt-3' />
              </h4>

              <div className='list mt-3'>
                <div className='item flex'>__ Home</div>
                <div className='item'>__ Phòng trọ</div>
                <div className='item'>__ Nhà</div>
                <div className='item'>__ Chung cư mini</div>
                <div className='item'>__ Phòng</div>
                <div className='item'>__ 404</div>
                <div className='item'>__ Contact Us</div>
              </div>
            </div>
          </div>

          <div className='div.col-lg-3 w-1/4'>
            <div className='div.footer-box'>
              <h4 className='heading4 font-semibold text-2xl'>
                Instagram
                <hr className='w-1/3 border-2 border-white mt-3' />
              </h4>

              <div className='list overflow-hidden mt-3'>
                <img className='object-cover' src={instagram} />
              </div>
            </div>
          </div>

          <div className='div.col-lg-3 w-1/4'>
            <div className='div.footer-box'>
              <h4 className='heading4 font-semibold text-2xl'>
                Gửi thông tin cho chúng tôi
                <hr className='w-1/3 border-2 border-white mt-3' />
              </h4>

              <div className='div.newsletter'>
                <div className='p.text-custom-white mt-3'>
                  Hãy gửi nhận xét về trang web của chúng tôi qua email để cải thiện trải nghiệm của bạn
                </div>

                <div className='mt-3'>
                  <input
                    className='shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                    type='text'
                    placeholder='Email Id'
                  />
                  <br />
                  <button className='bg-white  text-[#01B7F2]  py-2 px-4 rounded-full mt-3'>Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='div.copyright justify-center text-white text-xs absolute bottom-0 mb-3 rotate-180'>
          © Website - 2022 | All Right Reserved. Designed By Website
        </div>
      </div>
    </div>
  )
}
