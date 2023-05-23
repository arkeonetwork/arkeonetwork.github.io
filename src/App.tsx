import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { FaDiscord, FaExternalLinkAlt, FaGithub, FaTwitter } from 'react-icons/fa'

import HeroBg from './assets/arkeo-top-bg.jpeg'
import { BlueBlur } from './components/BlueBlur'
import { Bullet } from './components/Bullet'
import { GridSection, GridSectionLeft, GridSectionRight } from './components/GridSection'
import { DefiIcon } from './components/Icons/DefiIcon'
import { DexIcon } from './components/Icons/DexIcon'
import { GamingIcon } from './components/Icons/GamingIcon'
import { IdentityIcon } from './components/Icons/IdentityIcon'
import { SocialNetworksIcon } from './components/Icons/SocialNetworksIcon'
import { ListItem } from './components/ListItem'
import { ArkeoStackedLogo } from './components/Logos/ArkeoStackedLogo'
import { AwsLogo } from './components/Logos/AwsLogo'
import { InfuraLogo } from './components/Logos/InfuraLogo'
import { LavaLogo } from './components/Logos/LavaLogo'
import { PoktLogo } from './components/Logos/PoktLogo'
import { MarkBg } from './components/MarkBg'
import { Marketplace } from './components/Marketplace'
import { NavBar } from './components/NavBar'
import { NetworkGrid } from './components/NetworkGrid'
import { Orbs } from './components/orbs'
import { PurpleBlur } from './components/PurpleBlur'
import { Section } from './components/Section'
import { Shield } from './components/Shield'
import { Spider } from './components/Spider'
import { VioletBlur } from './components/VioletBlur'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex direction='column' flex='1' overflow='hidden'>
      <NavBar />
      <Section
        id='home'
        textAlign='center'
        containerProps={{ maxWidth: 'container.lg', display: 'flex', flexDir: 'column', gap: 2 }}
        pt={32}
      >
        <Image src={HeroBg} position='absolute' top={0} right='-20%' bottom='auto' />
        <Flex flexDir='column' position='relative'>
          <Heading
            as='h5'
            fontSize='md'
            textTransform='uppercase'
            fontWeight='black'
            color='teal.500'
          >
            Welcome to arkeo
          </Heading>
          <Heading
            letterSpacing='-0.03em'
            lineHeight={1}
            fontSize={{ base: '40px', md: '100px' }}
            fontWeight='black'
          >
            The Decentralized Back-End For All Node Data
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }} mt={6}>
            Arkeo was created to provide decentralized applications with increased development
            velocity, censorship-resistance, and most importantly to be a needed tool in fully
            decentralizing the UI layer of the web3 stack, all while reducing reliance on
            centralized data sources. In short, Arkeo is a free-market solution for decentralized
            infrastructure.
          </Text>
        </Flex>
      </Section>
      <Section px={{ base: 4, md: 0 }}>
        <SimpleGrid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
          <Flex flexDir='column' gap={4}>
            <Heading size='xl' variant='purple'>
              Origins and Technology
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo, originally incubated by the ShapeShift DAO, is being built on top of the cosmos
              SDK. At genesis, Arkeo validators will support a variety of nodes, including Bitcoin,
              Ethereum, Cosmos, and more. By utilizing these nodes, Arkeo aims to provide an open,
              censorship-resistant marketplace for various types of indexed node data.
            </Text>
          </Flex>
          <Flex flexDir='column' gap={4}>
            <Heading size='xl' variant='purple'>
              Community-Driven Ecosystem
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo is also dedicated to promoting a decentralized, community-driven ecosystem.
              Through the airdrop that includes FOX holders, the cosmos ecosystem, and the THORChain
              ecosystem, Arkeo will be initially launched, decentralized, and secured by a diverse
              community of stakeholders.
            </Text>
          </Flex>
        </SimpleGrid>
      </Section>
      <Section containerProps={{ position: 'relative' }} id='how-it-works'>
        <Orbs position='absolute' top='40%' left='-40%' bottom='auto' />
        <SimpleGrid
          gridTemplateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
          gap={6}
          position='relative'
        >
          <Flex flexDir='column' gap={4} gridColumn={{ base: '1fr', md: 'span 5' }}>
            <Heading size='2xl' variant='purple'>
              How Arkeo Works
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo is a decentralized back-end for node data. It aims to provide a
              censorship-resistant, open marketplace for various types of indexed node data. Arkeo
              achieves this through its custom built blockchain, built on the Cosmos SDK, which is
              able to coordinate and offer a marketplace of all type of blockchain nodes.
            </Text>
          </Flex>
          <Flex flexDir='column' gap={10} pt={14} gridColumn={{ base: '1fr', md: '7 / span 6' }}>
            <Stack>
              <Heading size='lg'>Un-Chained</Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color='purple.200'>
                The node data is indexed by a layer called “Un-chained” which is an open source
                library that has been developed and maintained by ShapeShift over many years.
              </Text>
            </Stack>
            <Stack>
              <Heading size='lg'>Accessing the Network</Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color='purple.200'>
                To access the Arkeo network, developers can drop in and replace what they would have
                used for other node providers, and of course can access the developer documentation
                which can be tailored to meet their specific needs. This allows developers to build
                decentralized applications that can interact with the Arkeo network in a variety of
                ways as deemed appropriate for their use cases.
              </Text>
            </Stack>
            <Stack>
              <Heading size='lg'>Validators and Data Providers</Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color='purple.200'>
                On the network side, validators can run full nodes of any blockchain that allows
                people to query their nodes at a price of their choosing (including for free if they
                so choose). Users can open a contract with specific data providers and escrow tokens
                for payment. Contacts can either be subscription based or pay-as-you-go, with more
                options coming down the line. Each query between user and data provider is
                cryptographically provable and redeemable on-chain as income for data providers.
              </Text>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Section>
      <Section overflow='hidden' position='relative'>
        <SimpleGrid gridTemplateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}>
          <Flex position='relative' gridColumn='1 / span 3'>
            <Flex
              transformOrigin='0 0'
              transform={{ base: 'none', md: 'rotate(90deg) translateY(-50%)' }}
              left={{ base: 0, md: '50%' }}
              position='absolute'
              gap={4}
              alignItems='center'
              _after={{
                content: '""',
                width: '300px',
                height: '2px',
                background: 'gray.800',
                display: 'block',
              }}
            >
              <Bullet />
              <Heading as='h5' textTransform='uppercase' size='md' whiteSpace='nowrap'>
                How Arkeo Works in 5 Points
              </Heading>
            </Flex>
          </Flex>
          <SimpleGrid
            gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gridGap={8}
            gridColumn={{ base: '1fr', md: '4 / span 10' }}
            pt={{ base: 16, md: 36 }}
          >
            <ListItem number='1'>
              Anyone can run full nodes of any blockchain and allow people to query their node(s) at
              a price of their choosing. These individuals are called data providers.
            </ListItem>
            <ListItem number='2'>
              Users can open a contract with specific data providers and escrow tokens. Contracts
              can be either subscription based or pay-as-you-go, with more options coming.
            </ListItem>
            <ListItem number='3'>
              Anyone can run full nodes of any blockchain and allow people to query their node(s) at
              a price of their choosing. These individuals are called data providers.
            </ListItem>
            <ListItem number='4'>
              10% of data provider income is paid to the network reserve, which is used to emit
              tokens to validators and delegates as block rewards.
            </ListItem>
            <ListItem number='5'>
              Data provider reputation is established by on-chain contract data such as provider
              age, user retention rates, number of queries, income, etc. From this, someone can
              abstract data provider quality.
            </ListItem>
          </SimpleGrid>
        </SimpleGrid>
      </Section>
      <Section
        containerProps={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        px={{ base: 4, md: 0 }}
        id='benefits'
      >
        <SimpleGrid gridTemplateColumns='repeat(12, 1fr)'>
          <Stack gridColumn={{ base: '2 / span 9', md: '4 / span 9' }}>
            <Heading size='2xl' variant='purple'>
              Benefits of Arkeo
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo provides a range of benefits to developers and users seeking to build or utilize
              decentralized applications. These include:
            </Text>
          </Stack>
        </SimpleGrid>
        <GridSection>
          <GridSectionLeft order={{ base: 2, md: 1 }}>
            <Heading size='lg'>Decentralization</Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo allows developers to fully decentralize their applications by providing a
              decentralized, indexed, censorship-resistant back-end for blockchain data. This means
              that developers can build and deploy applications that are free from centralized
              control or censorship, promoting a more open and transparent Web3 ecosystem.
            </Text>
          </GridSectionLeft>
          <GridSectionRight order={{ base: 1, md: 2 }}>
            <PurpleBlur position='absolute' right='-50%' bottom={{ base: '0', md: '-30%' }} />
            <Spider position='relative' width={{ base: '100%', md: 'auto' }} />
          </GridSectionRight>
        </GridSection>
        <GridSection>
          <GridSectionLeft>
            <NetworkGrid position='relative' width={{ base: '100%', md: 'auto' }} />
          </GridSectionLeft>
          <GridSectionRight>
            <Heading size='lg'>Compatibility with multiple blockchain networks</Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo runs a variety of nodes including Bitcoin, Ethereum, and Cosmos, and is built to
              enable the integration of any blockchain node with the consensus of Arkeo governance
              and community development. This means that developers can build applications that
              utilize data from multiple blockchain networks, enhancing the functionality and
              potential of their decentralized applications.
            </Text>
          </GridSectionRight>
        </GridSection>
        <GridSection>
          <VioletBlur position='absolute' left='-40%' bottom='-50%' />
          <GridSectionLeft order={{ base: 2, md: 1 }}>
            <Heading size='lg'>Incentivization of decentralized blockchain data</Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Prior to Arkeo, only altruists were running node data (or centralized companies). By
              incentivizing the decentralization of this part of the stack we have a more reliable
              and robust layer to power decentralized applications and interfaces across web3.
            </Text>
          </GridSectionLeft>
          <GridSectionRight order={{ base: 1, md: 2 }}>
            <Spider position='relative' width={{ base: '100%', md: 'auto' }} />
          </GridSectionRight>
        </GridSection>
        <GridSection>
          <GridSectionLeft>
            <Shield width={{ base: '100%', md: 'auto' }} />
          </GridSectionLeft>
          <GridSectionRight>
            <Heading size='lg'>Censorship-resistance</Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              As a decentralized network, Arkeo is resistant to censorship and centralized control,
              providing a more secure and transparent platform for the community to utilize and
              contribute to.
            </Text>
          </GridSectionRight>
        </GridSection>
        <GridSection>
          <GridSectionLeft order={{ base: 2, md: 1 }}>
            <Heading size='lg'>Marketplace for open blockchain data</Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo serves as a marketplace for various types of indexed node data, providing
              developers with an open, censorship-resistant source of node data to utilize and build
              on. This allows for nodes to offer different tiers of service on an on-chain contract
              basis between application and node providers (including free tiers).
            </Text>
          </GridSectionLeft>
          <GridSectionRight order={{ base: 1, md: 2 }}>
            <BlueBlur position='absolute' right='-50%' bottom='-30%' />
            <Marketplace position='relative' width={{ base: '100%', md: 'auto' }} />
          </GridSectionRight>
        </GridSection>
      </Section>
      <Section px={0} containerProps={{ position: 'relative' }} id='use-cases'>
        <MarkBg position='absolute' right='-45%' bottom='-10%' />
        <SimpleGrid gridTemplateColumns='repeat(12, 1fr)' position='relative'>
          <Stack spacing={24} gridColumn='2 / span 10'>
            <Stack>
              <Heading size='2xl' variant='purple'>
                Use cases for Arkeo
              </Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }}>
                Arkeo's decentralized, censorship-resistant back-end for node data has a wide range
                of potential use cases in the Web3 ecosystem. Here are a few examples:
              </Text>
            </Stack>

            <SimpleGrid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
              <Stack alignItems='flex-start'>
                <DexIcon />
                <Heading as='h5' fontSize='20px'>
                  Decentralized Exchanges (DEXs)
                </Heading>
                <Text fontSize='xl' color='purple.200'>
                  Arkeo can provide DEXs with access to indexed, up-to-date data from multiple
                  blockchain networks, enabling faster, more reliable trades and a more seamless
                  user experience.
                </Text>
              </Stack>
              <Stack alignItems='flex-start'>
                <DefiIcon />
                <Heading as='h5' fontSize='20px'>
                  Decentralized Finance (DeFi) applications
                </Heading>
                <Text fontSize='xl' color='purple.200'>
                  DeFi applications require up-to-date, accurate data from multiple sources, such as
                  exchange rates, interest rates, and token prices. Arkeo can provide a reliable,
                  censorship-resistant back-end for this data, enabling developers to build more
                  secure and transparent DeFi applications.
                </Text>
              </Stack>
              <Stack alignItems='flex-start'>
                <IdentityIcon />
                <Heading as='h5' fontSize='20px'>
                  Decentralized Identity
                </Heading>
                <Text fontSize='xl' color='purple.200'>
                  Arkeo's blockchain data can be used to power decentralized identity solutions,
                  such as self-sovereign identity, which allow individuals to own and control their
                  own identity data.
                </Text>
              </Stack>
              <Stack alignItems='flex-start'>
                <GamingIcon />
                <Heading as='h5' fontSize='20px'>
                  Gaming
                </Heading>
                <Text fontSize='xl' color='purple.200'>
                  Gaming applications that utilize blockchain technology often require access to
                  real-time data from multiple blockchain networks. Arkeo can provide this data in a
                  more reliable and transparent way, enabling developers to build more engaging and
                  interactive gaming experiences.
                </Text>
              </Stack>
              <Stack alignItems='flex-start'>
                <SocialNetworksIcon />
                <Heading as='h5' fontSize='20px'>
                  Social Networks
                </Heading>
                <Text fontSize='xl' color='purple.200'>
                  Decentralized social networks require reliable and secure access to data from
                  multiple blockchain networks. Arkeo can provide a censorship-resistant back-end
                  for this data, enabling developers to build more secure and transparent social
                  networks.
                </Text>
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
        <Alert
          status='info'
          variant='subtle'
          mt={24}
          bg='transparent'
          borderColor='gray.900'
          borderWidth={2}
          borderRadius='2xl'
          boxShadow='dark-lg'
          p={6}
        >
          <AlertIcon color='teal.500' />
          <AlertDescription fontSize='xl' lineHeight='1.5'>
            Overall, Arkeo's decentralized, censorship-resistant back-end for blockchain data has
            the potential to be a critical tool for developers seeking to build decentralized
            applications that require reliable and secure access to data from multiple blockchain
            networks. Any application which needs their interface to be fully decentralized can
            utilize Arkeo to help achieve that end.
          </AlertDescription>
        </Alert>
      </Section>
      <Section
        containerProps={{ display: 'flex', flexDir: 'column', gap: 24 }}
        id='arkeo-difference'
      >
        <Stack textAlign='center'>
          <Heading variant='purple' size='2xl'>
            The Arkeo Difference
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }}>
            Arkeo sets itself apart from other options by not relying on any third party load
            balancers, authentication/authorization servers, token prices, KYC, or teams. It’s a
            truly decentralized system with no borders.
          </Text>
        </Stack>
        <Flex overflowY='auto' mx={{ base: -4, md: 0 }}>
          <Table fontSize='lg' sx={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <Tbody>
              <Tr>
                <Td bg='#080B12' position='sticky' left={0}></Td>
                <Td textAlign='center' align='center'>
                  <AwsLogo display='inline' />
                </Td>
                <Td textAlign='center'>
                  <InfuraLogo display='inline' />
                </Td>
                <Td
                  textAlign='center'
                  borderTopWidth={2}
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  bg='whiteAlpha.50'
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  borderTopColor='teal.500'
                  borderTopLeftRadius='2xl'
                  borderTopRightRadius='2xl'
                >
                  <ArkeoStackedLogo display='inline' />
                </Td>
                <Td textAlign='center'>
                  <PoktLogo display='inline' />
                </Td>
                <Td textAlign='center'>
                  <LavaLogo display='inline' />
                </Td>
              </Tr>
              <Tr>
                <Td
                  fontWeight='bold'
                  color='purple.200'
                  position='sticky'
                  left={0}
                  bg='#080B12'
                  maxWidth={{ base: '150px', md: 'initial' }}
                >
                  Ease of Integration
                </Td>
                <Td textAlign='center'>Difficult</Td>
                <Td textAlign='center'>Easy</Td>
                <Td
                  textAlign='center'
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  bg='whiteAlpha.50'
                >
                  Easy
                </Td>
                <Td textAlign='center'>Easy</Td>
                <Td textAlign='center'>Easy</Td>
              </Tr>
              <Tr>
                <Td
                  fontWeight='bold'
                  color='purple.200'
                  position='sticky'
                  left={0}
                  bg='#080B12'
                  maxWidth={{ base: '150px', md: 'initial' }}
                >
                  Ease of Data Hosting
                </Td>
                <Td textAlign='center'>Difficult</Td>
                <Td textAlign='center'>Impossible</Td>
                <Td
                  textAlign='center'
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  bg='whiteAlpha.50'
                >
                  Easy
                </Td>
                <Td textAlign='center'>Difficult</Td>
                <Td textAlign='center'>Impossible</Td>
              </Tr>
              <Tr>
                <Td
                  fontWeight='bold'
                  color='purple.200'
                  position='sticky'
                  left={0}
                  bg='#080B12'
                  maxWidth={{ base: '150px', md: 'initial' }}
                >
                  Load Balancing
                </Td>
                <Td textAlign='center'>Centralized</Td>
                <Td textAlign='center'>Centralized</Td>
                <Td
                  textAlign='center'
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  bg='whiteAlpha.50'
                >
                  Decentralized
                </Td>
                <Td textAlign='center'>Centralized</Td>
                <Td textAlign='center'>-</Td>
              </Tr>
              <Tr>
                <Td
                  fontWeight='bold'
                  color='purple.200'
                  position='sticky'
                  left={0}
                  bg='#080B12'
                  maxWidth={{ base: '150px', md: 'initial' }}
                >
                  Authentication/Authorization
                </Td>
                <Td textAlign='center'>Centralized</Td>
                <Td textAlign='center'>Centralized</Td>
                <Td
                  textAlign='center'
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  bg='whiteAlpha.50'
                >
                  Decentralized
                </Td>
                <Td textAlign='center'>-</Td>
                <Td textAlign='center'>Centralized</Td>
              </Tr>
              <Tr>
                <Td
                  fontWeight='bold'
                  color='purple.200'
                  position='sticky'
                  left={0}
                  bg='#080B12'
                  borderBottomWidth={0}
                  maxWidth={{ base: '150px', md: 'initial' }}
                >
                  Open Source
                </Td>
                <Td textAlign='center' borderBottomWidth={0}>
                  <CloseIcon color='red.500' />
                </Td>
                <Td textAlign='center' borderBottomWidth={0}>
                  <CloseIcon color='red.500' />
                </Td>
                <Td
                  textAlign='center'
                  borderLeftWidth={2}
                  borderRightWidth={2}
                  borderLeftColor='teal.500'
                  borderRightColor='teal.500'
                  borderBottomWidth={2}
                  borderBottomColor='teal.500'
                  bg='whiteAlpha.50'
                  borderBottomLeftRadius='2xl'
                  borderBottomRightRadius='2xl'
                >
                  <CheckIcon color='green.500' />
                </Td>
                <Td textAlign='center' borderBottomWidth={0}>
                  <CheckIcon color='green.500' />
                </Td>
                <Td textAlign='center' borderBottomWidth={0}>
                  -
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
        <Stack gap={8}>
          <Text fontSize='xl'>
            With Arkeo, users can search, sort, and filter available data providers to find one that
            matches their needs and establish a contract. Once chosen, users connect directly to
            their preferred data host without any interaction with any other servers. This means
            that nobody else can disrupt the connection between the you+your users and the data they
            need
          </Text>
          <Text fontSize='xl'>
            Data providers in Arkeo are free to set their own pricing schedule, meaning data host
            profitability is not impacted by external market movements. Data providers no longer
            need to fear that a bear market will make their data host unprofitable due to the price
            movement of a token.
          </Text>
        </Stack>
      </Section>
      <Section id='community'>
        <GridSection>
          <GridSectionLeft>
            <Heading size='xl' variant='purple'>
              The Arkeo Community
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              Arkeo is more than just a decentralized back-end for blockchain data - it is a
              community-driven ecosystem that relies on the participation of a diverse group of
              stakeholders, including developers, users, and node operators. By building a strong
              and engaged community, Arkeo aims to create a decentralized and sustainable ecosystem
              for the development of Web3 applications.
            </Text>
          </GridSectionLeft>
          <GridSectionRight gap={6}>
            <Link>
              <Flex gap={4}>
                <FaGithub fontSize='42px' />
                <Stack mt={2}>
                  <Flex gap={2} alignItems='center'>
                    <Heading as='h5' fontSize='lg'>
                      Documentation & Tutorials
                    </Heading>
                    <FaExternalLinkAlt />
                  </Flex>

                  <Text color='purple.200' fontSize='lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </Text>
                </Stack>
              </Flex>
            </Link>
            <Link>
              <Flex gap={4}>
                <FaDiscord fontSize='42px' />
                <Stack mt={2}>
                  <Flex gap={2} alignItems='center'>
                    <Heading as='h5' fontSize='lg'>
                      Community Chat
                    </Heading>
                    <FaExternalLinkAlt />
                  </Flex>

                  <Text color='purple.200' fontSize='lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </Text>
                </Stack>
              </Flex>
            </Link>
            <Link>
              <Flex gap={4}>
                <FaGithub fontSize='42px' />
                <Stack mt={2}>
                  <Flex gap={2} alignItems='center'>
                    <Heading as='h5' fontSize='lg'>
                      Arkeo Github
                    </Heading>
                    <FaExternalLinkAlt />
                  </Flex>

                  <Text color='purple.200' fontSize='lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </Text>
                </Stack>
              </Flex>
            </Link>
            <Link>
              <Flex gap={4}>
                <FaTwitter fontSize='42px' />
                <Stack mt={2}>
                  <Flex gap={2} alignItems='center'>
                    <Heading as='h5' fontSize='lg'>
                      Arkeo Twitter
                    </Heading>
                    <FaExternalLinkAlt />
                  </Flex>

                  <Text color='purple.200' fontSize='lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </Text>
                </Stack>
              </Flex>
            </Link>
          </GridSectionRight>
        </GridSection>
      </Section>
    </Flex>
  </ChakraProvider>
)
