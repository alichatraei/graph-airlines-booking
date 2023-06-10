import { useInfiniteQuery } from '@tanstack/react-query'
import IFlightTicket from 'interfaces/IFlightTicket'
import axios from 'axios'

export type TResponse = {
  result: IFlightTicket[]
  total: number
}

interface Response {
  data: TResponse
  nextPage: number | undefined
}

const fetchNextPage = async ({ pageParam = 1 }): Promise<Response> => {
  const response = await axios.get<TResponse>(`http://localhost:3001/list`, {
    params: { page: pageParam, size: 3 },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  return {
    data: response.data,
    nextPage:
      response.data.result.length + pageParam < response.data.total
        ? pageParam + 1
        : undefined,
  }
}

const usePaginatedData = (hasLoadedAll: boolean) => {
  return useInfiniteQuery(['data'], fetchNextPage, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: hasLoadedAll,
  })
}

export default usePaginatedData
