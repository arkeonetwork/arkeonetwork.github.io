import type { HeadingProps } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export const PurpleHeader: React.FC<HeadingProps> = props => (
  <Heading
    backgroundImage='linear-gradient(180deg, #CAC1FF 0%, #988FCE 100%)'
    backgroundClip='text'
    lineHeight='1.2'
    letterSpacing='-0.03em'
    mb={4}
    {...props}
  />
)
