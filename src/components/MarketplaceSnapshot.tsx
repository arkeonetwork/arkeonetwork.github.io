import { Box, Button, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const MARKETPLACE_STATS_URL =
  process.env.REACT_APP_MARKETPLACE_STATS_URL ??
  'http://marketplace.builtonarkeo.com:9996/api/cache-counts'

const STAT_ITEMS = [
  { key: 'total_paid_uarkeo', label: 'ARKEO Earned' },
  { key: 'total_transactions', label: 'Transactions' },
  { key: 'active_providers', label: 'Providers' },
  { key: 'subscribers', label: 'Subscribers' },
  { key: 'active_services', label: 'Services' },
  { key: 'contracts', label: 'Contracts' },
  { key: 'validators_active', label: 'Validators' },
  { key: 'supported_chains', label: 'Active Types' },
] as const

type StatKey = (typeof STAT_ITEMS)[number]['key']

type MarketplaceStats = Partial<Record<StatKey, number | string>>

type MarketplaceSnapshotProps = {
  marketplaceUrl: string
}

const readStat = (source: Record<string, unknown>, key: StatKey) =>
  (source as Record<string, number | string>)[key]

const formatStat = (value?: number | string) => {
  if (value === 0) return '0'
  if (value) return value.toString()
  return '-'
}

export const MarketplaceSnapshot = ({ marketplaceUrl }: MarketplaceSnapshotProps) => {
  const [stats, setStats] = useState<MarketplaceStats | null>(null)

  useEffect(() => {
    if (!MARKETPLACE_STATS_URL) return
    let controller: AbortController | null = new AbortController()

    const loadStats = async () => {
      controller?.abort()
      controller = new AbortController()
      try {
        const response = await fetch(MARKETPLACE_STATS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error('Failed to load marketplace stats')
        const data = (await response.json()) as Record<string, unknown>
        const nextStats = STAT_ITEMS.reduce<MarketplaceStats>((acc, item) => {
          const value = readStat(data, item.key)
          if (value !== undefined) acc[item.key] = value
          return acc
        }, {})
        setStats(nextStats)
      } catch (error) {
        if (!controller?.signal.aborted) {
          setStats(null)
        }
      }
    }

    loadStats()
    const interval = window.setInterval(loadStats, 15000)

    return () => {
      controller?.abort()
      controller = null
      window.clearInterval(interval)
    }
  }, [])

  return (
    <Stack spacing={10}>
      <Stack spacing={4}>
        <Heading size='xl' variant='purple'>
          Arkeo Data Marketplace - Live Stats
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }}>
          Real-time data on providers, subscribers, and active services.
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
        {STAT_ITEMS.map(item => (
          <Box
            key={item.key}
            borderWidth={1}
            borderColor='whiteAlpha.200'
            borderRadius='xl'
            p={6}
            bg='whiteAlpha.50'
            textAlign='center'
          >
            <Text color='purple.200' fontSize='sm' textTransform='uppercase'>
              {item.label}
            </Text>
            <Heading size='lg' mt={2}>
              {formatStat(stats?.[item.key])}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>
      <Button
        as={Link}
        href={marketplaceUrl}
        alignSelf='center'
        bg='teal.500'
        color='white'
        _hover={{ bg: 'teal.400', boxShadow: '0 0 12px rgba(59, 224, 255, 0.6)' }}
      >
        View the Arkeo Data Marketplace
      </Button>
    </Stack>
  )
}
