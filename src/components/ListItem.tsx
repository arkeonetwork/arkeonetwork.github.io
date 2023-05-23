import { Box, Center, Flex, Text } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

type ListItemProps = {
  number: string
} & PropsWithChildren

export const ListItem: React.FC<ListItemProps> = ({ number, children }) => {
  return (
    <Flex>
      <Box>
        <Center
          backgroundImage='linear-gradient(136.74deg, #101624 18.15%, rgba(16, 22, 36, 0) 67.7%);'
          borderRadius='full'
          boxSize='120px'
        >
          <Text
            fontSize='4xl'
            fontWeight='bold'
            backgroundImage='linear-gradient(180deg, #486FF9 0%, rgba(72, 111, 249, 0) 100%);'
            backgroundClip='text'
          >
            {number}
          </Text>
        </Center>
      </Box>
      <Text fontSize='xl'>{children}</Text>
    </Flex>
  )
}
