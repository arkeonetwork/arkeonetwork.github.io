import { extendTheme } from '@chakra-ui/react'

import { HeadingStyle as Heading } from './components/theme/Heading.theme'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#080B12',
      },
    },
  },
  colors: {
    teal: {
      DEFAULT: '#3BE0FF',
      50: '#F3FDFF',
      100: '#DEFAFF',
      200: '#B5F3FF',
      300: '#8DEDFF',
      400: '#64E6FF',
      500: '#3BE0FF',
      600: '#03D7FF',
      700: '#00AACA',
      800: '#007B92',
      900: '#004B5A',
      950: '#00343E',
    },
  },
  components: {
    Heading,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})
