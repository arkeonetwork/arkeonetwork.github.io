import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

import { Logo } from './Logo'

const MARKETPLACE_URL = 'https://marketplace.builtonarkeo.com/'

export const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box position='fixed' top={0} left={0} width='full' zIndex='banner' backdropFilter='blur(15px)'>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH={'72px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        mx='auto'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        alignItems={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align='center'>
          <Link href='/'>
            <Logo />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml='auto' align='center' gap={4}>
            <DesktopNav />
            <Button
              as={Link}
              href={MARKETPLACE_URL}
              bg='teal.500'
              color='white'
              aria-label='Open Arkeo Data Marketplace'
              _hover={{ bg: 'teal.400', boxShadow: '0 0 12px rgba(59, 224, 255, 0.6)' }}
            >
              Arkeo Data Marketplace
            </Button>
          </Flex>
        </Flex>

        {/* <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            onClick={toggleColorMode}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button>
        </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <Button onClick={toggleColorMode}>Toggle</Button> */}
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => {
        const isExternal = Boolean(navItem.isExternal || navItem.href?.startsWith('http'))
        return (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                {isExternal ? (
                  <Button
                    as={Link}
                    p={2}
                    variant='ghost'
                    href={navItem.href}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Button>
                ) : (
                  <Button
                    as={ScrollLink}
                    p={2}
                    variant='ghost'
                    to={navItem.href ?? '#'}
                    spy={true}
                    smooth={true}
                    fontWeight={500}
                    color={linkColor}
                    sx={{ '&.active': { textDecoration: 'underline' } }}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Button>
                )}
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        )
      })}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      <Button
        as={Link}
        href={MARKETPLACE_URL}
        bg='teal.500'
        color='white'
        width='full'
        aria-label='Open Arkeo Data Marketplace'
        _hover={{ bg: 'teal.400', boxShadow: '0 0 12px rgba(59, 224, 255, 0.6)' }}
      >
        Arkeo Data Marketplace
      </Button>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href, isExternal }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()
  const isExternalLink = Boolean(isExternal || (href && href.startsWith('http')))
  const linkColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      {isExternalLink ? (
        <Flex
          py={2}
          as={Link}
          href={href}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text fontWeight={600} color={linkColor}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      ) : (
        <Flex
          py={2}
          as={ScrollLink}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text fontWeight={600} color={linkColor}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: NavItem[]
  href?: string
  isExternal?: boolean
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: 'home',
  },
  {
    label: 'How It Works',
    href: 'how-it-works',
  },
  {
    label: 'Benefits',
    href: 'benefits',
  },
  {
    label: 'Use Cases',
    href: 'use-cases',
  },
  {
    label: 'Marketplace',
    href: MARKETPLACE_URL,
    isExternal: true,
  },
  {
    label: 'Arkeo Difference',
    href: 'arkeo-difference',
  },
  {
    label: 'Community',
    href: 'community',
  },
]
