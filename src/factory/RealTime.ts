import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { realTimeType } from '../models/realTime.type'

const fetchRealTime = async () => {
  try {
    const { data } = await axios.get(
      `https://onboarding-pracice.vercel.app/realtime`,
    )
    return data.data
  } catch (e) {
    throw new Error('Failed to fetch main product data')
  }
}

export const getRealTime = () => {
  const queryKey = ['fetchRealTime']

  const { data, error, ...queryProps } = useQuery<realTimeType[]>({
    queryKey,
    queryFn: () => fetchRealTime(),
  })

  if (error) {
    console.error('Error fetching realtime rank:', error)
  }

  return {
    data,
    error,
    ...queryProps,
  }
}
