import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

export const PurpleBlur = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    height='904'
    width='auto'
    viewBox='0 0 1181 904'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_f_469_591)'>
      <ellipse cx='603.5' cy='504' rx='165.5' ry='170' fill='#074DFF' />
    </g>
    <g filter='url(#filter1_f_469_591)'>
      <ellipse
        cx='594.452'
        cy='452.07'
        rx='415.902'
        ry='213.297'
        transform='rotate(21.9073 594.452 452.07)'
        fill='#2A17A7'
        fill-opacity='0.5'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_469_591'
        x='238'
        y='134'
        width='731'
        height='740'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_469_591' />
      </filter>
      <filter
        id='filter1_f_469_591'
        x='0.382812'
        y='0.580078'
        width='1188.14'
        height='902.98'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_469_591' />
      </filter>
    </defs>
  </chakra.svg>
)
