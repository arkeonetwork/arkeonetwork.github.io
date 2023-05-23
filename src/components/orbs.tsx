import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

export const Orbs = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    height='1084'
    width='auto'
    viewBox='0 0 1084 1084'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g style={{ mixBlendMode: 'overlay' }}>
      <circle cx='542' cy='542' r='541' stroke='white' stroke-width='2' />
      <circle cx='531.5' cy='541.5' r='391.5' stroke='white' stroke-width='2' />
      <circle cx='542.5' cy='541.5' r='255.5' stroke='white' stroke-width='2' />
      <circle cx='890' cy='699' r='12' fill='#D9D9D9' />
      <circle cx='1031' cy='310' r='12' fill='#D9D9D9' />
      <circle cx='740' cy='210' r='12' fill='#D9D9D9' />
    </g>
  </chakra.svg>
)
