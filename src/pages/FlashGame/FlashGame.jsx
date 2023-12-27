import { Flash } from 'react-ruffle'
export default function FlashGame() {
  return (
    <div className='left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]  absolute'>
      <Flash
        className='w-[100vw] h-[80vh]'
        src={
          {
            0: '../src/asset/HB7.swf',
            1: '../src/asset/N1.swf',
            2: '../src/asset/N2.swf',
            3: '../src/asset/N3.swf',
            4: '../src/asset/N4.swf',
            5: '../src/asset/N5.swf'
          }[Math.floor(Math.random() * 6)]
        }
      />
    </div>
  )
}
