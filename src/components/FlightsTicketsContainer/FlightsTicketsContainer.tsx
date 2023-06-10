import { Fragment, ReactElement, useState } from 'react'
import FlightTicket from '@components/FlightTicketBoard/FlightTicket'
import usePaginatedData from '../../hooks/useGetTickets'

const FlightsTicketsContainer = (): ReactElement => {
  const [hasLoadedAll, setHasLoadedAll] = useState<boolean>(true)
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePaginatedData(hasLoadedAll)

  if (!data) {
    return <div>Loading...</div>
  }

  const allData = data.pages.flatMap((page) => page.data.result)
  console.log(allData)
  const totalItems = data.pages[0]?.data.total
  console.log(data)
  const handleLoadMore = () => {
    fetchNextPage()
    if (!hasNextPage) {
      setHasLoadedAll(true)
    }
  }

  return (
    <div className="flex flex-col items-around flex-1 justify-around w-full   mx-auto container">
      <div className=" flex justify-between items-center">
        <span>Total items: {totalItems}</span>
        <span>Items displayed: {allData.length}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10  ">
        {allData.map((item, index) => (
          <Fragment key={index}>
            <FlightTicket key={index} flight={item} />
          </Fragment>
        ))}
      </div>
      {allData.length < totalItems && (
        <button
          className="btn w-fit mx-auto"
          onClick={handleLoadMore}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load more'}
        </button>
      )}
      {!hasNextPage && <div>All data has been loaded.</div>}
    </div>
  )
}

export default FlightsTicketsContainer
