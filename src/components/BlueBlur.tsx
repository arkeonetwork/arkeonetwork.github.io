import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

export const BlueBlur = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    height='1110'
    width='auto'
    viewBox='0 0 1213 1110'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_f_469_54)'>
      <ellipse
        cx='606.718'
        cy='550.118'
        rx='415.902'
        ry='337.3'
        transform='rotate(21.9073 606.718 550.118)'
        fill='#153BFF'
        fill-opacity='0.2'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_469_54'
        x='0.735352'
        y='0.737793'
        width='1211.97'
        height='1098.76'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_469_54' />
      </filter>
    </defs>
  </chakra.svg>
)
