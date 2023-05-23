import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

export const Bullet = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    height='23'
    width='auto'
    viewBox='0 0 20 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18 18.4757C19.2376 17.7612 20 16.4407 20 15.0116V8.08304C20 6.654 19.2376 5.3335 18 4.61896L12 1.15476C10.7624 0.440195 9.23758 0.440195 7.99996 1.15476L1.99996 4.61896C0.762377 5.3335 0 6.654 0 8.08304V15.0116C0 16.4407 0.762377 17.7612 1.99996 18.4757L7.99996 21.9399C9.23758 22.6545 10.7624 22.6545 12 21.9399L18 18.4757Z'
      fill='#3BE0FF'
    />
  </chakra.svg>
)
