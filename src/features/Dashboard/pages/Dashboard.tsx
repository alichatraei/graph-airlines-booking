import { ReactElement } from 'react'
import { FlightsTicketsContainer } from '@components/index'
import Navbar from '@layouts/Navbar/Navbar'

const Dashboard = (): ReactElement => {
  return (
    <>
      <Navbar />
      <FlightsTicketsContainer />
    </>
  )
}

export default Dashboard
