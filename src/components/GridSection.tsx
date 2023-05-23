import type { SimpleGridProps, StackProps } from '@chakra-ui/react'
import { SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

export const GridSection: React.FC<SimpleGridProps> = props => (
  <SimpleGrid
    gridTemplateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
    alignItems='center'
    gridGap={{ base: 12, md: 24 }}
    position='relative'
    {...props}
  />
)
export const GridSectionLeft: React.FC<StackProps> = props => (
  <Stack position='relative' gridColumn={{ base: '1fr', md: '1 / span 6' }} {...props} />
)
export const GridSectionRight: React.FC<StackProps> = props => (
  <Stack position='relative' gridColumn={{ base: '1fr', md: '7 / span 6' }} {...props} />
)
