import { ReactElement } from 'react'

import './styles.css'
import FlightTicket from '@components/FlightTicketBoard/FlightTicket'

const FlightsTicketsContainer = (): ReactElement => {
  const DataArr = Array(3).fill(0).map(Number.call, Number)

  return (
    <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full">
      {DataArr.map((_: any, index: number) => (
        <FlightTicket key={index} index={index} />
      ))}
    </div>
  )
}

export default FlightsTicketsContainer
