import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

export const VioletBlur = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    height='1521'
    width='auto'
    viewBox='0 0 1398 1521'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.3' filter='url(#filter0_f_469_55)'>
      <ellipse cx='650' cy='760.5' rx='448' ry='460.5' fill='#9209FD' />
    </g>
    <defs>
      <filter
        id='filter0_f_469_55'
        x='-98'
        y='0'
        width='1496'
        height='1521'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_469_55' />
      </filter>
    </defs>
  </chakra.svg>
)
