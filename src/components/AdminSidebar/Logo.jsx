export default function Logo() {
  return (
    <div className='mt-[40vh] w-full relative'>
      <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[10%]'>
        <div className='adminlogo2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='174' height='174' viewBox='0 0 174 174' fill='none'>
            <g filter='url(#filter0_d_712_871)'>
              <circle cx='87' cy='69' r='47' fill='url(#paint0_linear_712_871)' />
              <circle cx='87' cy='69' r='44.5' stroke='white' strokeWidth='5' />
            </g>
            <path d='M76.0923 77.3033H96.8176V86.3143H76.0923V77.3033Z' fill='white' />
            <path
              d='M97.5385 79.1956C97.5385 76.2322 96.3707 73.3901 94.2922 71.2947C92.2136 69.1992 89.3945 68.022 86.4549 68.022C83.5154 68.022 80.6963 69.1992 78.6177 71.2947C76.5392 73.3901 75.3714 76.2322 75.3714 79.1956L86.4549 79.1956H97.5385Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M86.5 81.989C92.8452 81.989 97.989 76.8452 97.989 70.5C97.989 64.1548 92.8452 59.011 86.5 59.011C80.1548 59.011 75.011 64.1548 75.011 70.5C75.011 76.8452 80.1548 81.989 86.5 81.989ZM86.5 91C97.8218 91 107 81.8218 107 70.5C107 59.1782 97.8218 50 86.5 50C75.1782 50 66 59.1782 66 70.5C66 81.8218 75.1782 91 86.5 91Z'
              fill='white'
            />
            <defs>
              <filter
                id='filter0_d_712_871'
                x='0'
                y='0'
                width='174'
                height='174'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='18' />
                <feGaussianBlur stdDeviation='20' />
                <feColorMatrix type='matrix' values='0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.12 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_712_871' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_712_871' result='shape' />
              </filter>
              <linearGradient
                id='paint0_linear_712_871'
                x1='40'
                y1='22'
                x2='134'
                y2='116'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#868CFF' />
                <stop offset='1' stopColor='#4318FF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='adminlogo flex justify-center items-center rounded-[24px] mx-[2vw] h-[25vh]'>
        <div>
          <div className='flex justify-center font-dmsans-700 text-white'>Tro.vn</div>
          <div className='font-dmsans-500 text-white'>Kết nối mọi nhà</div>
        </div>
      </div>
    </div>
  )
}
