import { Flash } from 'react-ruffle'
export default function FlashGame() {
  return (
    <div className='left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]  absolute'>
      <Flash
        className='w-[100vw] h-[80vh]'
        src={
          {
            0: '/HB7.swf',
            1: '/N1.swf',
            2: '/N2.swf',
            3: '/N3.swf',
            4: '/N4.swf',
            5: '/N5.swf'
          }[Math.floor(Math.random() * 6)]
        }
      />
    </div>
  )
}
